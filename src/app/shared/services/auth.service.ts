import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BaseApi, BaseUrl, BaseHeaders, GET, POST, Query, Path, Body  } from '@delon/theme';
import { Injectable, Injector } from '@angular/core';
import { LoginContentModel } from 'src/app/core/model/login-content-model';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { tap, catchError } from 'rxjs/operators';
import { _HttpClient } from './http.client';

@BaseUrl('/auth')
@BaseHeaders({ 'Content-Type': 'application/json' })
@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApi{
	
	@POST("/login")
	login(@Body content:LoginContentModel):Observable<ResultBeanModel>{
		return;
	}
}