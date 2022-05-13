const request = require("supertest");
const User = require("../../modules/user.module");

let server;
let userInfo;
jest.setTimeout(10000);
beforeEach(() => {
  server = require("../../index");
  userInfo = {
    username: "usernameTestrequired",
    email: "test@required.com",
    password: "passwordTest@req",
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

      const res = await request(server)
        .get("/api/user/" + user._id)
        .set("x-auth-token", token)
        .expect(200);
    });
    it("should return 200 pass if user is admin", async () => {
      const userAdmin = new User(userInfo);
      userAdmin.isAdmin = true;
      const tokenAdmin = userAdmin.generateAuthToken();
      await userAdmin.save();

      const user = new User({
        username: "admin",
        email: "admin@required.com",
        password: "passwordTest2@req",
      });
      user.generateAuthToken();
      await user.save();

      await request(server)
        .get("/api/user/" + user._id)
        .set("x-auth-token", tokenAdmin)
        .expect(200);
    });
    it("should return 403 not pass if user try to access to NOT his own the data", async () => {
      const user1 = new User(userInfo);
      const user1Token = user1.generateAuthToken();
      await user1.save();
      const user2 = new User(userInfo);
      user2.username = "usertest2";
      user2.email = "useremail@test.gmail.com";
      const user2Token = user2.generateAuthToken();
      await user2.save();
      //user1 try to access to user2's data

      const res = await request(server)
        .get("/api/user/" + user1._id)
        .set("x-auth-token", user2Token)
        .expect(403);
      expect(res.body).toBe("You do not have a permission to do that");
    });
  });
});
