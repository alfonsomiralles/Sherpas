const expect = require("chai").expect;
const { send } = require("process");
const request = require("supertest");

const app = require("../../../index.js");
const conn = require("../../../routes/customers.js");

describe("POST /customers", function() {

  it("Ok, creating a new customer", async function() {
    request(app).post("/customers")
      .send({ name: "test", surname: "test", email: "test", birthdate: "test" })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property("name");
        expect(body).to.contain.property("surname");
        expect(body).to.contain.property("email");
        expect(body).to.contain.property("birthdate");
        done();
      })
      .catch((err) => done(err));
  });
});
