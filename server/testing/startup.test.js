const db = require("../startup/db")("1");

describe("mongoose connections", () => {
  it("should console with the error if the db link was invalid", (done) => {
    expect(db).toThrowError();
  });
});
