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
      /*===================used to generate token====================*/
      /*let jwtToken;

      function loginUser()
      {
        findOneStub.yields(null, config.testConf.tokenTest);
        return function(done)
        {
         server
         .post('/login')
         .send({"email":"nishantjaiswal49@gmail.com","password":"12345"})
         .end(function(err, res) {
           should.not.exist(err);
           jwtToken = res.body.token;
           done();
         });
       };
     }*/

     /*=========================Test Cases for registration========================*/

     describe('Register method is tested here',()=>{

      beforeEach(()=>{
        findStub.yields(null,[]);
        regStub.yields(null,[config.testConf.registerTest])
      });

      it('Registration must be a success',(done)=>{
        server
        .post('/register')
        // .set('Authorization',jwtToken)
        .expect('Content-Type', /json/)
        .expect(200)
        .send(config.testConf.registerTest)
        .end((err,res)=>{
          if(err){
           console.log(err)
         }
         else{
          res.body[0].email.should.be.equal(config.testConf.registerTest.email);
          done();
        }
      });
      });

      it('Registration must not be a success',(done)=>{
        server
        .post('/register')
        // .set('Authorization',jwtToken)
        .expect('Content-Type', /json/)
        .expect(200)
        .send(config.testConf.registerTest)
        .end((err,res)=>{
          if(err){
           console.log(err)
         }
         else{
          res.body[0].email.should.not.be.equal(config.testConf.registerTest.emailNegative);
          done();
        }
      });
      });
    });
