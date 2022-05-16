const Joi = require("joi");
const request = require("supertest");
const validatorMiddleware = require("../midleware/validator.middleware");
const User = require("../modules/user.module");
const validaters = require("../modules/validaters");
const userController = require("../routes/user/user.controller");
let server;
let newRegistering;
jest.setTimeout(10000);
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
describe("/api/user", () => {
  describe("GET /  getUser by id ", () => {
    it("should return username and email by given valid id 200 pass  ", async () => {
      const user = new User(newRegistering);
      const token = user.generateAuthToken();

      await user.save();

      const res = await request(server)
        .get("/api/user/" + user._id)
        .set("x-auth-token", token)
        .expect(200);
      expect(res.body).toHaveProperty("username", user.username);
      expect(res.body).toHaveProperty("email", user.email);
    });
    it("should return 404 for an invalid given id", async () => {
      const user = new User(newRegistering);
      user.isAdmin = true;
      const token = user.generateAuthToken();

      await user.save();
      await request(server)
        .get("/api/user/1")
        .set("x-auth-token", token)
        .expect(404);
    });
  });
  describe("PUT / changeInfo", () => {
    it("should find user by given valid id and update the user info 200", async () => {
      const user = new User(newRegistering);
      const token = user.generateAuthToken();

      await user.save();
      await request(server)
        .put("/api/user/" + user._id)
        .set("x-auth-token", token)
        .send({
          username: "changedChanged",
          email: "changed@required.com",
          password: "passwordTe",
        })
        .expect(200);

      const { username, email } = await User.findById(user._id);

      expect(username).toBe("changedChanged");
      expect(email).toBe("changed@required.com");
    });
    it("should retutn 404 if the id was invalid ", async () => {
      const user = new User(newRegistering);
      user.isAdmin = true;
      const token = user.generateAuthToken();

      await user.save();
      await request(server)
        .put("/api/user/1")
        .send({
          username: "changedChanged",
          email: "changed@required.com",
          password: "passwordTe",
        })
        .set("x-auth-token", token)
        .expect(404);
    });
    it("should retutn 500 if the server failed hashing new password ", async () => {});
    it("should retutn 400 if the update info with invalid  ", async () => {
      const user = new User(newRegistering);
      const token = user.generateAuthToken();

      await user.save();
      await request(server)
        .put("/api/user/" + user._id)
        .set("x-auth-token", token)
        .send({
          username: "c",
          email: "changed@required.com",
          password: "123",
        })
        .expect(400);
    });
  });
});
