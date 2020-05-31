import { LoginContentModel } from './../model/login-content-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }


	login(content:LoginContentModel):void{
		console.log('log in to server');
		console.log(content);
		return null;
	}
}
