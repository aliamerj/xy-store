const {
  validateCreateProduct,
  validateCreateOrder,
  validateCreateCart,
  validateRegister,
  validateLogin,
} = require("../modules/validaters");

describe.skip("validaters test", () => {
  describe("validate Create Product ", () => {
    const productTestCorrectly = {
      title: "test product test",
      description: "this is just test test product",
      image: "image test",
      categories: ["test1", "test2"],
      size: "1 test",
      color: "color test",
      price: 1,
    };
    it("should pass if entered all info correctly", () => {
      expect(validateCreateProduct(productTestCorrectly)).toStrictEqual({
        value: productTestCorrectly,
      });
    });
    it("should throw an error if there is missing info ", () => {
      expect(
        validateCreateProduct({
          title: "test product test",
          description: "this is just test test product",
        })
      ).toHaveProperty("error");
    });
    it("should throw an error if entered any invalid value", () => {
      productTestCorrectly.title = 1;
      expect(validateCreateProduct(productTestCorrectly)).toHaveProperty(
        "error"
      );
      productTestCorrectly.title = "test product test";
      productTestCorrectly.description = "hi";
      expect(validateCreateProduct(productTestCorrectly)).toHaveProperty(
        "error"
      );
    });
  });
  describe("validate Create Order ", () => {
    const orderTestCorrectly = {
      userId: "test userId test",
      products: [{ test1: "test1" }, { test2: "test2" }],
      amount: 1,
      address: { test1: "test1" },
      status: "1 test",
    };
    it("should pass if entered all info correctly", () => {
      expect(validateCreateOrder(orderTestCorrectly)).toStrictEqual({
        value: orderTestCorrectly,
      });
    });
    it("should throw an error if there is missing info ", () => {
      expect(
        validateCreateOrder({
          amount: 1,
          address: { test1: "test1" },
        })
      ).toHaveProperty("error");
    });
    it("should throw an error if entered any invalid value", () => {
      orderTestCorrectly.products = 1;
      expect(validateCreateOrder(orderTestCorrectly)).toHaveProperty("error");
      orderTestCorrectly.products = ["test1", "test2"];
      orderTestCorrectly.address = "hi";
      expect(validateCreateOrder(orderTestCorrectly)).toHaveProperty("error");
    });
  });
  describe("validate Create Cart", () => {
    const cartTestCorrectly = {
      userId: "userId test",
      products: [{ product: "product1" }, { product: "product2" }],
    };
    it("should pass if entered all info correctly", () => {
      expect(validateCreateCart(cartTestCorrectly)).toStrictEqual({
        value: cartTestCorrectly,
      });
    });
    it("should throw an error if there is missing info ", () => {
      expect(
        validateCreateCart({ products: ["product1", "product2"] })
      ).toHaveProperty("error");
    });
    it("should throw an error if entered any invalid value ", () => {
      cartTestCorrectly.userId = 1;
      expect(validateCreateCart(cartTestCorrectly)).toHaveProperty("error");
      (cartTestCorrectly.userId = "user test"),
        (cartTestCorrectly.products = { product: "product" });
      expect(validateCreateCart(cartTestCorrectly)).toHaveProperty("error");
    });
  });
  describe("validate Register", () => {
    const newRegistering = {
      username: "usernameTestrequired",
      email: "test@required.com",
      password: "passwordTest@req",
    };
    it("should pass if entered all info correctly", () => {
      expect(validateRegister(newRegistering)).toStrictEqual({
        value: newRegistering,
      });
    });
    it("should throw an error if there is missing info ", () => {
      expect(
        validateRegister({
          username: "usernameTestrequired",
        })
      ).toHaveProperty("error");
      expect(
        validateRegister({
          email: "test@required.com",
        })
      ).toHaveProperty("error");
      expect(
        validateRegister({
          password: "test@required.com",
        })
      ).toHaveProperty("error");

      expect(
        validateRegister({
          username: "usernameTestrequired",
          email: "test@required.com",
        })
      ).toHaveProperty("error");
      expect(
        validateRegister({
          username: "usernameTestrequired",
          password: "passwordTest@req",
        })
      ).toHaveProperty("error");
      expect(
        validateRegister({
          email: "test@required.com",
          password: "passwordTest@req",
        })
      ).toHaveProperty("error");
    });
    it("should throw an error if entered any invalid value ", () => {
      (newRegistering.username = "a"),
        expect(validateRegister(newRegistering)).toHaveProperty("error");
      newRegistering.username = "usernameTestrequired";
      newRegistering.email = "invalid";
      expect(validateRegister(newRegistering)).toHaveProperty("error");
      newRegistering.email = "test@required.com";
      newRegistering.password = "123";
      expect(validateRegister(newRegistering)).toHaveProperty("error");
    });
  });
  describe("validate Login", () => {
    const login = {
      email: "test@test.com",
      password: "testRequirePass",
    };
    it("should pass if entered all info correctly", () => {
      expect(validateLogin(login)).toStrictEqual({ value: login });
    });
    it("should throw an error if there is missing info ", () => {
      expect(validateLogin({ email: "test@test.com" })).toHaveProperty("error");
      expect(validateLogin({ password: "testRequirePass" })).toHaveProperty(
        "error"
      );
    });
    it("should throw an error if entered any invalid value ", () => {
      login.email = "test";
      expect(validateLogin(login)).toHaveProperty("error");
      login.email = "test@test.com";
      login.password = "123";
      expect(validateLogin(login)).toHaveProperty("error");
    });
  });
});
