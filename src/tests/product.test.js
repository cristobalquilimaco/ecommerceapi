const request = require("supertest");
const app = require("../app");
const Category = require("../models/Category");
require("../models");

const BASE_URL_USERS = "/api/v1/users/login";
const BASE_URL = "/api/v1/products";
let TOKEN;
let category;
let productId;

beforeAll(async () => {
  const user = {
    email: "quilimacox1@gmail.com",
    password: "1234",
  };

  const res = await request(app).post(`${BASE_URL_USERS}`).send(user);

  TOKEN = res.body.token;
});

test("POST -> 'BASE_URL' should return status code 201 and res.body.title === product.title", async () => {
  const categoryBody = {
    name: "Tech",
  };

  category = await Category.create(categoryBody);

  const product = {
    title: "xiaomi 12 pro",
    description: "Loremipsum12",
    price: "198.10",
    categoryId: category.id,
  };

  const res = await request(app)
    .post(BASE_URL)
    .send(product)
    .set("authorization", `Bearer ${TOKEN}`);

  productId = res.body.id;

  expect(res.status).toBe(201);
  expect(res.body.title).toBe(product.title);
});

test("GET -> 'BASE_URL', should return status code 200 and res.body.length === 1 and res.body[0] to be defined", async () => {
  const res = await request(app)
  .get(BASE_URL);

  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
  expect(res.body[0]).toBeDefined()
});

test("GET -> 'BASE_URL?category = category.id', should return status code 200 and res.body.length === 1 and res.body[0] to be defined", async () => {
    const res = await request(app)
    .get(`${BASE_URL}?category=${category.id}`);
  
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toBeDefined()
  });


test("GET ONE -> 'BASE_URL/id', should return status code 200 and res.body.title === 'xiaomi 12 pro'", async () => {
  const res = await request(app)
  .get(`${BASE_URL}/${productId}`);

  expect(res.status).toBe(200);
  expect(res.body.title).toBe("xiaomi 12 pro");
});

test("PUT -> 'BASE_URL/id', should return status code 200 and res.body.title === body.title", async () => {
  const product = {
    title: "xiaomi 12 pro xmax",
  };

  const res = await request(app)
    .put(`${BASE_URL}/${productId}`)
    .send(product)
    .set("authorization", `Bearer ${TOKEN}`);

  expect(res.status).toBe(200);
  expect(res.body.title).toBe(product.title);
});

test("DELETE -> 'BASE_URL/id', should return status code 204", async () => {
  const res = await request(app)
    .delete(`${BASE_URL}/${productId}`)
    .set("authorization", `Bearer ${TOKEN}`);

  expect(res.status).toBe(204);

  await category.destroy()
});
