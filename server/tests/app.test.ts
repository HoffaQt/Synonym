import { Application } from 'express';
import chai from 'chai';
import chaiHttp from 'chai-http';
import mocha from "mocha";
import appInit from "../src/index";


const appTest: Application = appInit;
chai.use(chaiHttp);
chai.should();



describe("App test", () => {
  describe("/api/synonyms/", () => {
    
    it("Add a single Word", (done) => {
      const word: string = "test";
      chai.request(appTest)
        .post(`/api/synonyms/word`)
        .set('content-type', 'application/json')
        .send({ word: word })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
    
    it("Add a single Word and create synonym with existing word", (done) => {
      const newWord: string = "newWord";
      const existingWord: string = "test";
      chai.request(appTest)
        .post(`/api/synonyms/synonym`)
        .set('content-type', 'application/json')
        .send({ newWord: newWord, existingWord: existingWord })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
    
    it("Get all words", (done) => {
      chai.request(appTest)
        .get("/api/synonyms/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    
    it("Get synonyms for one word", (done) => {
      chai.request(appTest)
        .get("/api/synonyms/test")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    
    chai.request(appTest)
      .post(`/api/synonyms/word`)
      .set('content-type', 'application/json')
      .send({ word: "testWord" })
      .end((err, res) => {
        res.should.have.status(201);
      });
    
    it("Update synonyms for one word", (done) => {
      chai.request(appTest)
        .put("/api/synonyms/synonym")
        .set('content-type', 'application/json')
        .send({ wordToBeUpdated: "test", synonymWord: "testWord" })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    
    it("Remove one word", (done) => {
      chai.request(appTest)
        .delete("/api/synonyms/word")
        .set('content-type', 'application/json')
        .send({ word: "test" })
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
    
  });
});
