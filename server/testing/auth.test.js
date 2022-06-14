const request = require("supertest");
const bycrypt = require("bcrypt");
const User = require("../modules/user.module");
let server;
let newRegistering;

jest.setTimeout(100000);

beforeEach(() => {
  server = require("../index");
  newRegistering = {
    firstName: "alialialai",
    lastName: "ameramaer",
    email: "test@required.com",
    password: "passwordTest@req",
    country: "Iraq",
    city: "baghdad",
    address1: "dsafa",
    address2: "dafds",
    zip: 12343,
  };
});

afterEach(async () => {
  await User.deleteMany({});
  jest.restoreAllMocks();
  server.close();
});
describe("/register", () => {
  it("should return 201 pass if user enter all info properly", async () => {
    await request(server).post("/register").send(newRegistering).expect(201);
  });
  it("should return 400  if there is missing info or invalid", async () => {
    newRegistering.email = null;
    await request(server).post("/register").send(newRegistering).expect(400);
  });
});
describe("/api/login", () => {
  it("should return 200 pass if user enter correct email and password", async () => {
    await request(server).post("/register").send(newRegistering).expect(201);

    await request(server)
      .post("/login")
      .send({
        email: newRegistering.email,
        password: newRegistering.password,
      })
      .expect(200);
  });
  it("should return 400  if user enter invalid email and password", async () => {
    await request(server)
      .post("/login")
      .send({ email: "1", password: null })
      .expect(400);
  });
  it("should return 400  if user enter invalid email ", async () => {
    await request(server)
      .post("/login")
      .send({ email: "1", password: "testtest" })
      .expect(400);
  });
  it("should return 400  if user enter invalid password ", async () => {
    await request(server)
      .post("/login")
      .send({ email: newRegistering.email, password: null })
      .expect(400);
  });
  it("should return 400  if user enter Email not existing ", async () => {
    const res = await request(server)
      .post("/login")
      .send({ email: newRegistering.email, password: "testtesttest" })
      .expect(400);

    expect(res.body).toBe("Incorrect Email or password .");
  });
  // take a lot of time
  it.skip("should return 400  if user enter incorrect password ", async () => {
    const user = new User(newRegistering);
    await user.save();
    const res = await request(server)
      .post("/login")
      .send({ email: newRegistering.email, password: "incorrect" })
      .expect(400);

    expect(res.body).toBe("Incorrect Email or password .");
  });
});
