const configDb = require("config");
const config = require("../startup/config");
jest.setTimeout(100000);
describe("configrations ", () => {
  it("should throw an error if  config key for db is not defiened", () => {
    jest.spyOn(configDb, "get").mockReturnValueOnce(undefined);
    expect.assertions(2);
    try {
      config();
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
      expect(error).toHaveProperty(
        "message",
        "FATAL ERROR : DB KEY is not defined"
      );
    }
  });
});
