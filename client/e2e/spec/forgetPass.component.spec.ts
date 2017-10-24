/* 

Name:shivangi sharma

		*/

//------------------------------------------imported files--------------------------------------------//

	import { browser,element,by } from 'protractor';
	import { ForgetPassComponent } from '../../src/app/forget-pass/forget-pass.component';
	
//-----------------------------------------test Suit---------------------------------------//

	 describe('ForgetPassComponent', () => {

 //-----------------------------------------positive test case---------------------------------------//
	   
	    it('input',()=>{
		 	browser.get("http://localhost:49152/forgetpass");
	            element(by.name('email')).sendKeys('shivangisharma0812@gmail.com');
	          })
		  it('h4',()=>{
		expect(element(by.id('h4')).getText()).toEqual("Forget Password");
	          })
		  it('button click',()=>{
			element(by.id('verify')).click();
            })
		  it('button text',()=>{
			expect(element(by.id('verify')).getText()).toEqual("Submit");
	         })
		});

//-----------------------------------------test Suit---------------------------------------//

describe('ForgetPassComponent', () => {

 //----------------------------------------negative test case---------------------------------------//

	it('button text',()=>{
			expect(element(by.id('verify')).getText()).not.toEqual("submitt");
	         })
	 it('h4',()=>{
		  	expect(element(by.id('h4')).getText()).not.toEqual("Forget");
	          })
		  });

