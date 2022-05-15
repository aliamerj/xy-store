const request = require("supertest");
const bycrypt = require("bcrypt");
const User = require("../modules/user.module");
let server;
let newRegistering;

jest.setTimeout(100000);

beforeEach(() => {
  server = require("../index");
  newRegistering = {
    username: "usernameTestrequired",
    email: "test@required.com",
    password: "passwordTest@req",
  };
});

afterEach(async () => {
  await User.deleteMany({});
  jest.restoreAllMocks();
  server.close();
});
describe("/api/register", () => {
  it("should return 200 pass if user enter all info properly", async () => {
    await request(server)
      .post("/api/register")
      .send(newRegistering)
      .expect(201);
  });
  it("should return 400  if there is missing info or invalid", async () => {
    newRegistering.username = null;
    await request(server)
      .post("/api/register")
      .send(newRegistering)
      .expect(400);
  });
  it.skip("should return 500 if the server failed hashing password", async () => {
    // joi will stop you
    newRegistering.password = null;
    await request(server)
      .post("/api/register")
      .send(newRegistering)
      .expect(500);
  });
  it.skip("should return 500 if the server failed generate Token", async () => {});
});
describe("/api/login", () => {
  it("should return 200 pass if user enter correct email and password", async () => {
    await request(server).post("/api/register").send(newRegistering);

    const res = await request(server)
      .post("/api/login")
      .send({ email: newRegistering.email, password: newRegistering.password });

    expect(res.body).toBe("login successed");
  });
  it("should return 400  if user enter invalid email and password", async () => {
    await request(server)
      .post("/api/login")
      .send({ email: "1", password: null });
  });
  it("should return 400  if user enter invalid email ", async () => {
    await request(server)
      .post("/api/login")
      .send({ email: "1", password: "testtest" })
      .expect(400);
  });
  it("should return 400  if user enter invalid password ", async () => {
    const res = await request(server)
      .post("/api/login")
      .send({ email: newRegistering.email, password: null })
      .expect(400);
  });
  it("should return 400  if user enter Email not existing ", async () => {
    const res = await request(server)
      .post("/api/login")
      .send({ email: newRegistering.email, password: "testtesttest" })
      .expect(400);

    expect(res.body).toBe("Email or password was incorrect.");
  });
  it("should return 400  if user enter incorrect password ", async () => {
    await request(server).post("/api/register").send(newRegistering);
    const res = await request(server)
      .post("/api/login")
      .send({ email: newRegistering.email, password: "incorrect" })
      .expect(400);

    expect(res.body).toBe("Email or password was incorrect.");
  });
});
