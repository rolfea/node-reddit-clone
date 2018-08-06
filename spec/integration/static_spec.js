const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const marco = base + "marco";

describe("routes : static", () => {

    describe("GET /", () => {
        it("should return status code 200", (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });

    describe("GET /marco", () => {
        it("should return status code 200", (done) => {
            request.get(marco, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it("should return a message in the body that says 'polo'", (done) => {
            request.get(marco, (err, res, body) => {                
                expect(res.body).toContain("polo");
                done();
            });
        });
    });
});