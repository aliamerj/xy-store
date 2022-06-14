const request = require("supertest");
const User = require("../modules/user.module");
let server;
let newRegistering;
jest.setTimeout(10000);
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
describe("/api/user", () => {
  describe("GET /  getUser by id ", () => {
    it("should return username and email by given valid id 200 pass  ", async () => {
      const user = new User(newRegistering);
      const token = user.generateAuthToken();

      await user.save();

      const res = await request(server)
        .get("/user/" + user._id)
        .set("Cookie", [`auth=${token};`])
        .expect(200);
      expect(res.body).toHaveProperty("email", newRegistering.email);
    });
    it("should return 404 for an invalid given id", async () => {
      const user = new User(newRegistering);
      user.isAdmin = true;
      const token = user.generateAuthToken();

      await user.save();
      await request(server)
        .get("/user/1")
        .set("Cookie", [`auth=${token};`])
        .expect(404);
    });
  });
  describe("PUT / changeInfo", () => {
    it("should find user by given valid id and update the user info 200", async () => {
      const user = new User(newRegistering);
      const token = user.generateAuthToken();

      await user.save();
      newRegistering.email = "changed@required.com";
      await request(server)
        .put("/user/" + user._id)
        .set("Cookie", [`auth=${token};`])
        .send(newRegistering)
        .expect(200);

      const { email } = await User.findById(user._id);
      expect(email).toBe("changed@required.com");
    });
    it("should retutn 404 if the id was invalid ", async () => {
      const user = new User(newRegistering);
      user.isAdmin = true;
      const token = user.generateAuthToken();

      await user.save();
      newRegistering.email = "changed@required.com";
      await request(server)
        .put("/user/1")
        .send(newRegistering)
        .set("Cookie", [`auth=${token};`])
        .expect(404);
    });
    it("should retutn 400 if the update info with invalid  ", async () => {
      const user = new User(newRegistering);
      const token = user.generateAuthToken();

      await user.save();
      newRegistering.email = "c";
      await request(server)
        .put("/user/" + user._id)
        .set("Cookie", [`auth=${token};`])
        .send(newRegistering)
        .expect(400);
    });
  });
});
