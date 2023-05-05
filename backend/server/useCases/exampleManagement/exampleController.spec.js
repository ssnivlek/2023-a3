const { index } = require("./exampleController");
const flushPromises = () => new Promise(setImmediate);
const sinon = require("sinon");

describe("the canary spec", () => {
  it("shows the infrastructure works", () => {
    expect(true).toBe(true);
  });
});

describe("simple description about the test suit", () => {
  it("tests a controller", async () => {
    const req = { body: {} };
    const res = { code: sinon.stub().returnsThis(), send: sinon.stub() };
    index(req, res);
    await flushPromises();
    sinon.assert.calledWith(res.send, "Test");
  });
  it.todo("test that you have to implement later");
});
