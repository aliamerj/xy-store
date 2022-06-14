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

describe("accessToHisOwnData :: with User route", () => {
  describe("GET / getUser", () => {
    it("should return 200 pass if user try to access to his own the data", async () => {
      const user = new User(userInfo);
      const token = user.generateAuthToken();

      await user.save();

      await request(server)
        .get("/user/" + user._id)
        .set("Cookie", [`auth=${token};`])
        .expect(200);
    });
    it("should return 200 pass if user is admin", async () => {
      const userAdmin = new User(userInfo);
      userAdmin.isAdmin = true;
      const tokenAdmin = userAdmin.generateAuthToken();
      await userAdmin.save();

      userInfo.email = "admin@required.com";

      const user = new User(userInfo);
      user.isAdmin = false;
      user.generateAuthToken();
      await user.save();

      await request(server)
        .get("/user/" + user._id)
        .set("Cookie", [`auth=${tokenAdmin};`])
        .expect(200);
    });
    it("should return 403 not pass if user try to access to NOT his own the data", async () => {
      const user1 = new User(userInfo);
      user1.generateAuthToken();
      await user1.save();
      const user2 = new User(userInfo);
      user2.email = "useremail@test.gmail.com";
      const user2Token = user2.generateAuthToken();
      await user2.save();
      //user2 try to access to user1's data

      const res = await request(server)
        .get("/user/" + user1._id)
        .set("Cookie", [`auth=${user2Token};`])
        .expect(403);
      expect(res.body).toBe("You do not have a permission to do that");
    });
  });
});
