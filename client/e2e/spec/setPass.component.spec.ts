/* 

Name:shivangi sharma

*/

//------------------------------------------imported files--------------------------------------------//

import { browser,element,by } from 'protractor';
import { SetPasswordComponent } from '../../src/app/set-password/set-password.component';

//-----------------------------------------test Suit---------------------------------------//

describe('SetPasswordComponent', () => {
	
	//-----------------------------------------positive test case---------------------------------------//

	it('SetPassword Testing',()=>{
		browser.get("http://localhost:49152/setpassword");
		element(by.name('Password')).sendKeys('p2@123');
	});
	it('SetPassword Testing',()=>{
		element(by.name('confirm')).sendKeys('p2@123');
	});
	it('SetPassword Testing',()=>{		
		element(by.id('change')).click();
	});
});

