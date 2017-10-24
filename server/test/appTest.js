 let supertest =require( 'supertest');
  let express  =require( 'express');
   let sinon =require( 'sinon');
   let chai =require( 'chai');

      let expect = require('chai').expect;
      let assert = require('chai').assert;
      let should = require('chai').should();

      let app  =require( '../app').default;
      let register=require( '../routes/register');
      let forget =require( '../routes/forgotPassword');
      let  chatApp=require( '../model/user');
      let findStub = sinon.stub(chatApp,'find');
      let findOneStub = sinon.stub(chatApp,'findOne');
      let updateStub=sinon.stub(chatApp,'update');
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

     /*describe('Register method is tested here',()=>{

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
    });*/

  /*============================ forget password test case ==================================*/

     describe('Forget password test cases ',(done) =>{
      beforeEach(() => {
       findStub.yields(null, config.testConf.forgetError);
      });
      it('Forget password test case unsuccessful',(done) => {
        server
        .post('/forgotPass')
        .send(config.testConf.forgetTest)
        .end((err, res) => {
          if (err){
            console.log(err);
          }
          else{
            console.log(res.body)
            expect(res.body.Message).to.equal(config.testConf.forgetError.Message);
            done();          
          }
        });
      });
      it('Forget password test case successful',(done) => {
        server
        .post('/forgotPass')
        
        .send({})
        .end((err, res) => {

          if (err){
            console.log(err);
          }

          else{
            expect(res.body.email).to.equal(config.testConf.tokenTest.email);
            done();          
          }
        });
      });
    });

     describe('forget  user password ',() =>{
       beforeEach(() => {
         findStub.yields(null, config.testConf.tokenTest);
         updateStub.yields(null, {ok:1,n:1,nModified:1});
       });
       it("set new password negative test case",(done) => {
         server
         .put('/forgotPass')
         
         .send(config.testConf.setPassword)
           .end((err, res) => {
             if (err)
             {
               console.log(err);
             }
             else   {
               expect(res.body.nModified).should.not.be.eql("0");
               expect(res.body.ok).should.not.be.eql("0");
               expect(res.body.n).should.not.be.eql("0");
               done();          
             }
           });
         });

       it("set new password",(done) => {
         server
         .put('/forgotPass')
         
         .send(config.testConf.setPassword)
         .end((err, res) => {
           if (err)
           {
             console.log(err);
           }
           else   {
             expect(res.body.nModified).to.equal(1);
             expect(res.body.ok).to.equal(1);
             expect(res.body.n).to.equal(1);
             done();          
           }
         });
       });

     });  
