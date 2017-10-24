 let supertest =require( 'supertest');
  let express  =require( 'express');
   let sinon =require( 'sinon');
   let chai =require( 'chai');
      let expect = require('chai').expect;
      let assert = require('chai').assert;
      let should = require('chai').should();

      let app  =require( '../app').default;
      let register=require( '../routes/register');
      let  chatApp=require( '../model/user');
      let findStub = sinon.stub(chatApp,'find');
      let findOneStub = sinon.stub(chatApp,'findOne');
      let regStub=sinon.stub(chatApp.prototype,'save');
      let server = supertest(app);
      let config=require('../config/appTest.config');

       /*=========================Test Cases for login========================*/

     describe('User Login authentication ',(done) =>{

      beforeEach(() => {
        findOneStub.yields(null, config.testConf.responseTest);
      });
      it("login user ",(done) => {
        server
        .post('/login')
        .send(config.testConf.loginTest)
        .end((err, res) => {
          if (err){
            console.log(err);
          }
          else{
            expect(res.body.success).to.equal(true);
            done();          
          }
        });
      });

      it("login user",(done) => {
        server
        .post('/login')
        .send(config.testConf.responseTest)
        .end((err, res) => {
          if (err){
            console.log(err);
          }
          else{
            expect(res.body.success).to.equal(false);
            done();          
          }
        });
      });

      it("login user",(done) => {
        server
        .post('/login')
        .send(config.testConf.responseTest)
        .end((err, res) => {
          if (err){
            console.log(err);
          }
          else{
            expect(res.body.message).to.equal(config.testConf.loginMessage.error);
            done();          
          }
        });
      });
    });