/* 

Name:Rumani Jain
Date : 24 - October - 2017

*/

//------------------------------------------imported files--------------------------------------------//

import { browser,element,by } from 'protractor';
import { RegisterComponent } from '../../src/app/register/register.component';
//-----------------------------------------test Suit for postive test specs---------------------------------------//

describe('RegisterComponent', () => {

	//-----------------------------------------positive test case---------------------------------------//

	it('name',()=>{
		browser.get("http://localhost:49152/register");
		element(by.name('fullname')).sendKeys('Rumani');
	});
	it('email',()=>{
		element(by.name('email')).sendKeys('rumani.jain111@gmail.com');
	});
	it('password',()=>{
		element(by.name('password')).sendKeys('12345');
	});
	it('conf',()=>{
		element(by.name('confirm')).sendKeys('12345');
	});
	it('mbl',()=>{
		element(by.name('mobilenumber')).sendKeys('8989909767');
	});
	
	
});
			