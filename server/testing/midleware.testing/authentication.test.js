const request = require("supertest");
const User = require("../../modules/user.module");

let server;
let userInfo;
jest.setTimeout(10000);
beforeEach(() => {
  server = require("../../index");
  userInfo = {
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
  server.close();
});

describe("auth :: with User route", () => {
  describe("GET / getUser", () => {
    it("should return 200 pass if user is logged in", async () => {
      const user = new User(userInfo);
      const token = user.generateAuthToken();

      await user.save();

      const res = await request(server)
        .get("/user/" + user._id)
        .set("Cookie", [`auth=${token};`])
        .expect(200);
    });
    it("should return 401 not pass if user not logged in", async () => {
      const user = new User(userInfo);

      await user.save();

      const res = await request(server)
        .get("/user/" + user._id)
        .expect(401);
      expect(res.body).toBe("you are not authenticated!!");
    });
    it("should return 403 not pass if token is invalid ", async () => {
      const user = new User(userInfo);

      await user.save();

      const res = await request(server)
        .get("/user/" + user._id)
        .set("Cookie", [`auth=invalid Token;`])
        .expect(403);
      expect(res.body).toBe("invalid token");
    });
  });
});
