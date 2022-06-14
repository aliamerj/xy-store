const request = require("supertest");
const Product = require("../modules/product.module");
let server;
let productTest;
jest.setTimeout(10000);

beforeEach(() => {
  server = require("../index");
  productTest = {
    title: "test product test",
    description: "this is just test test product",
    image: "image test",
    categories: ["test1", "test2"],
    size: "1 test",
    color: "color test",
    price: 1,
  };
});
afterEach(async () => {
  await Product.deleteMany({});
  server.close();
});

describe("/product", () => {
  describe("GET/ getAllProduct /", () => {
    it("should return all products", async () => {
      await Product.collection.insertMany([
        productTest,
        {
          title: "test 2  product test",
          description: "this is just test test product 2",
          image: "image test 2",
          categories: ["test1", "test2"],
          size: "2 test",
          color: "color test",
          price: 2,
        },
      ]);

      const res = await request(server).get("/product");

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some(
          (p) => (
            p.title === "test 2  product test",
            p.description === "this is just test test product 2",
            p.image === "image test 2",
            p.categories.length === 2,
            p.size === "2 test",
            p.color === "color test",
            p.price === 2
          )
        )
      ).toBeTruthy();
    });

    it("should return 404 if there is no product", async () => {
      const res = await request(server)
        .get("/product")
        .set("Accept", "application/json")
        .expect(404);
      expect(res.body).toStrictEqual("there is no product ");
    });
  });
  describe("GET/ getProduct ", () => {
    it("should return product with given id  (200)", async () => {
      const product = new Product(productTest);
      await product.save();
      const res = await request(server)
        .get("/product/" + product._id)
        .expect(200);
      expect(res.body).toHaveProperty("title", product.title);
    });
    it("should throw an error if id was invlid (404) ", async () => {
      await request(server).get("/product/1").expect(404);
    });
  });
  describe("POST/ createProduct", () => {
    it("should add new product with 201 created", async () => {
      await request(server).post("/product").send(productTest).expect(201);
    });
    it("should throw an error with 400 when there is a data missing", async () => {
      await request(server)
        .post("/product")
        .send({ title: "test" })
        .expect(400);
    });
    it("should throw an error with 500 if the server couldn't save data", () => {});
  });
  describe("PUT/ updateProduct", () => {
    it("should update info with given valid id", async () => {
      const product = new Product(productTest);
      await product.save();
      const res = await request(server)
        .put("/product/" + product._id)
        .send({
          title: "changed changed changed",
          description: "it is now changed  test",
          image: "image test",
          categories: ["test1", "test2"],
          size: "1 test",
          color: "color test",
          price: 1,
        })
        .expect(200);

      const productTitle = await Product.findById(product._id);

      expect(productTitle.title).toBe("changed changed changed");
    });
    it("should return 404 when id is invalid", async () => {
      await request(server)
        .put("/product/1")
        .send({
          title: "changed changed changed",
          description: "it is now changed  test",
          image: "image test",
          categories: ["test1", "test2"],
          size: "1 test",
          color: "color test",
          price: 1,
        })
        .expect(404);
    });
    it("should return 400 if new user info was invalid", async () => {
      const product = new Product(productTest);
      await product.save();
      await request(server)
        .put("/product/" + product._id)
        .send({
          title: "changed changed changed",
          description: 1,
          size: "1 test",
          color: "color test",
          price: 1,
        })
        .expect(400);
    });
  });
  describe("DELETE/ deleteProduct ", () => {
    it("should delete product with given valid id ", async () => {
      const product = new Product(productTest);
      await product.save();
      await request(server)
        .delete("/product/" + product._id)
        .expect(200)
        .then((e) => {
          expect(e.body).toBe("product has been deleted...");
        });
    });
    it("should return 404 if id was invalid ", async () => {
      await request(server).delete("/product/1").expect(404);
    });
  });
});
