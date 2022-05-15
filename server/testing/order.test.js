const { default: mongoose } = require("mongoose");
const request = require("supertest");
const Order = require("../modules/order.module");
let server;
let orderTest;

jest.setTimeout(10000);

beforeEach(() => {
  server = require("../index");
  orderTest = {
    userId: "test userId test",
    products: [{ test1: "test1" }, { test2: "test2" }],
    amount: 1,
    address: { test1: "test1" },
    status: "1 test",
  };
});
afterEach(async () => {
  await Order.deleteMany({});
  server.close();
});

describe.only("/api/order", () => {
  describe("GET/ getAllOrder /", () => {
    it("should return all orders", async () => {
      await Order.collection.insertMany([
        orderTest,
        {
          userId: "test userId test2",
          products: ["test12", "test22"],
          amount: 1,
          address: { test12: "test12" },
          status: "1 test2",
        },
      ]);

      const res = await request(server).get("/api/order");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some(
          (o) => (
            o.userId === "test userId test2",
            o.products.length === 2,
            o.amount === 1,
            o.address != null,
            o.status === "1 test2"
          )
        )
      ).toBeTruthy();
    });

    it("should throw an error if there is problem", () => {
      request(server)
        .get("/api/order")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404);
    });
  });
  // TODO:
  describe.skip("GET/ getOrder by id ", () => {
    it("should return order with given id  (200)", async () => {
      const order = new Order(orderTest);
      await order.save();
      const res = await request(server)
        .get("/api/order/" + order._id)
        .expect(200);
      expect(res.body).toHaveProperty("userId", order.userId);
    });
    it("should throw an error if id was invlid (404) ", async () => {
      await request(server).get("/api/order/1").expect(404);
    });
  });
  describe("POST/ createOrder", () => {
    it("should add new order with 201 created", async () => {
      await request(server).post("/api/order").send(orderTest).expect(201);
    });
    it("should throw an error with 422 when there is a data missing or invalid", async () => {
      await request(server)
        .post("/api/order")
        .send({ title: "test" })
        .expect(422);

      await request(server)
        .post("/api/order")
        .send({
          products: [{ test1: "test1" }, { test2: "test2" }],
          amount: 1,
          address: { test1: "test1" },
        })
        .expect(422);
    });
  });
  describe("PUT/ updateOrder", () => {
    it("should update info with given valid id", async () => {
      const order = new Order(orderTest);
      await order.save();
      const res = await request(server)
        .put("/api/order/" + order._id)
        .send({
          userId: "changed changed",
          products: [{ test1: "test1" }, { test2: "test2" }],
          amount: 1,
          address: { test1: "test1" },
          status: "1 test",
        })
        .expect(200);

      const { userId } = await Order.findById(order._id);

      expect(userId).toBe("changed changed");
    });
    it("should return 404 when id is invalid", async () => {
      const res = await request(server)
        .put("/api/order/1")
        .send({
          userId: "changed changed",
          products: [{ test1: "test1" }, { test2: "test2" }],
          amount: 1,
          address: { test1: "test1" },
          status: "1 test",
        })
        .expect(404);
    });
    it("should return 404 if info was invalid or missing", async () => {
      const order = new Order(orderTest);
      await order.save();
      const res = await request(server)
        .put("/api/order/" + order._id)
        .send({
          amount: 1,
          address: { test1: "test1" },
          status: "1 test",
        })
        .expect(400);
    });
  });
  describe("DELETE/ deleteOrder ", () => {
    it("should delete order with given valid id ", async () => {
      const order = new Order(orderTest);
      await order.save();
      await request(server)
        .delete("/api/order/" + order._id)
        .expect(200)
        .then((e) => {
          expect(e.body).toBe("Order has been deleted...");
        });
    });
    it("should return 404 if id was invalid ", async () => {
      const res = await request(server).delete("/api/order/1").expect(404);
    });
  });
  describe("GET/ getUserOrder ", () => {
    it("should return order with given userId  (200)", async () => {
      const order = new Order(orderTest);
      await order.save();
      const res = await request(server)
        .get("/api/order/find/" + order.userId)
        .expect(200);
      expect(res.body).toHaveProperty("address");
      expect(res.body).toHaveProperty("products");
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("userId");
    });
    it("should throw an error if userId was invlid (404) ", async () => {
      await request(server).get("/api/order/find/1").expect(404);
    });
  });
});
