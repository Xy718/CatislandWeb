import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }


	login():void{
		console.log('log in to server');
		return null;
	}
}