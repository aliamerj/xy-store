jest.setTimeout(100000);
describe.skip("mongoose connections", () => {
  it("should console with the error if the db link was invalid", (done) => {
    expect(require("../startup/db")("mongodb+srv://1")).toBeUndefined();
  });
});
