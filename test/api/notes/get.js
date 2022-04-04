const expect = require("chai").expect;
const { send } = require("process");
const request = require("supertest");

const app = require("../../../index.js");
const conn = require("../../../routes/customers.js");

describe("GET /customers", (done)=> {
  it("Ok, getting customers", (done)=> {
    request(app).get("/customers")
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property("id");
        expect(body).to.contain.property("name");
        expect(body).to.contain.property("surname");
        expect(body).to.contain.property("email");
        expect(body).to.contain.property("birthdate");
        done();
      })
      .catch((err) => done(err));
  });
});
