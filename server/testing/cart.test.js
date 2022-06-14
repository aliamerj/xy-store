const request = require("supertest");
const Cart = require("../modules/cart.module");
let server;
let cartTest;

jest.setTimeout(10000);

beforeEach(() => {
  server = require("../index");
  cartTest = {
    userId: "userId test",
    products: [{ product: "product1" }, { product: "product2" }],
  };
});
afterEach(async () => {
  await Cart.deleteMany({});
  server.close();
});

describe("/cart", () => {
  describe("GET/ getAllcart /", () => {
    it("should return all carts", async () => {
      await Cart.collection.insertMany([
        cartTest,
        {
          userId: "userId test22",
          products: [{ product: "product12" }, { product: "product22" }],
        },
      ]);

      const res = await request(server).get("/cart");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some(
          (c) => (c.userId === "test userId test2", c.products.length === 2)
        )
      ).toBeTruthy();
    });

    it("should throw an error if server unable to load carts or cart was empty", async () => {
      const res = await request(server)
        .get("/cart")
        .set("Accept", "application/json")
        .expect(404);
      expect(res.body).toStrictEqual("the cart is empty");
    });
  });
  describe("POST/ createCart", () => {
    it("should add new cart with 201 created", async () => {
      await request(server).post("/cart").send(cartTest).expect(201);
    });
    it("should throw an error with 400 when there is any invalid", async () => {
      await request(server).post("/cart").send({ userId: 1 }).expect(400);
    });
  });
  describe("PUT/ updatecart", () => {
    it("should update info with given valid id", async () => {
      const cart = new Cart(cartTest);
      await cart.save();
      await request(server)
        .put("/cart/" + cart._id)
        .send({
          userId: "changed changed",
          products: [{ product: "product1" }, { product: "product2" }],
        })
        .expect(200);

      const { userId } = await Cart.findById(cart._id);

      expect(userId).toBe("changed changed");
    });
    it("should return 404 when id is invalid", async () => {
      await request(server)
        .put("/cart/1")
        .send({
          userId: "changed changed",
          products: [{ product: "product1" }, { product: "product2" }],
        })
        .expect(404);
    });
    it("should return 400 if new info was invalid", async () => {
      await request(server)
        .put("/cart/1")
        .send({
          userId: 1,
          products: [{ product: "product1" }, { product: "product2" }],
        })
        .expect(400);
    });
  });
  describe("DELETE/ deletecart ", () => {
    it("should delete cart with given valid id ", async () => {
      const cart = new Cart(cartTest);
      await cart.save();
      await request(server)
        .delete("/cart/" + cart._id)
        .expect(200)
        .then((e) => {
          expect(e.body).toBe("cart has been deleted...");
        });
    });
    it("should return 404 if id was invalid ", async () => {
      await request(server).delete("/cart/1").expect(404);
    });
  });
  describe("GET/ getUserCart ", () => {
    it("should return cart with given userId  (200)", async () => {
      const cart = new Cart(cartTest);
      await cart.save();
      const res = await request(server)
        .get("/cart/find/" + cart.userId)
        .expect(200);
      expect(res.body).toHaveProperty("products");
      expect(res.body).toHaveProperty("userId");
    });
    it("should throw an error if id was invalid (404) ", async () => {
      await request(server).get("/cart/find/1").then(404);
    });
  });
});
