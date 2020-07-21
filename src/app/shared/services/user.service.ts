import { Injectable, Injector } from '@angular/core';
import { BaseUrl, BaseHeaders, BaseApi, GET, Headers, POST, Query, Body, Payload } from '@delon/theme';
import { Observable } from 'rxjs';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { TopicModel } from 'src/app/core/model/topic-model';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { HttpHeaders } from '@angular/common/http';

@BaseUrl('/user')
@BaseHeaders({ 'Content-Type': 'application/json'})
@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseApi{

  @GET()
	getUserSelf():Observable<ResultBeanModel<any>>{
		return ;
  }

  @POST()
  changeAvatar(@Query('type') type: any,@Body file?:any):Observable<any>{
		return ;
  }
}
