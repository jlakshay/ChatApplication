/* 

Name:shivangi sharma

*/

//------------------------------------------imported files--------------------------------------------//

import { browser,element,by } from 'protractor';
import { MailverificationComponent } from '../../src/app/mailverification/mailverification.component';

//-----------------------------------------test Suit---------------------------------------//

describe('MailverificationComponent', () => {

//-----------------------------------------positive test case---------------------------------------//

  it('click',()=>{
    /*    browser.waitForAngularEnabled(false);*/
    browser.get("http://localhost:49152/verify");
    element(by.id('login')).click();
  })
  it('should pass',()=>{
    element(by.name('email')).sendKeys('shivangisharma0812@gmail.com');
  })
  it('buttonTitle',()=>{
    expect(element(by.id('login')).getText()).toEqual("Submit");
  })
  it('h1',()=>{
    expect(element(by.id('h1')).getText()).toEqual("Verification");
  })
 /* it('h3',()=>{
    expect(element(by.id('h3')).getText()).toEqual("Please enter the OTP sent to your email");
  })*/
})

//-----------------------------------------test Suit---------------------------------------//

describe('MailverificationComponent', () => {


  //-----------------------------------------negative test case---------------------------------------//

  it('buttonTitle',()=>{
    expect(element(by.id('login')).getText()).not.toEqual("ssubmit");
  })
  it('h1',()=>{
    expect(element(by.id('h1')).getText()).not.toEqual("Vverification");

  })
  /*it('h3',()=>{
    expect(element(by.id('h3')).getText()).not.toEqual("wrong");
  })*/
});