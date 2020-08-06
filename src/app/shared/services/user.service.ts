import { Injectable, Injector, Inject } from '@angular/core';
import { BaseUrl, BaseHeaders, BaseApi, GET, Headers, POST, Query, Body, Payload } from '@delon/theme';
import { Observable } from 'rxjs';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { TopicModel } from 'src/app/core/model/topic-model';
import { DA_SERVICE_TOKEN, ITokenService, TokenService } from '@delon/auth';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
}

@Injectable({
    providedIn: 'root'
})
export class UserAvatarService{
  constructor(
    private http: HttpClient,
    @Inject(DA_SERVICE_TOKEN)
    private tokenSrv:TokenService
    ) { }

  changeAvatar(type: any,file?:Blob):Observable<any>{
    let h= new HttpHeaders({
      'Authorization': this.tokenSrv.get()
    })
    var fd = new FormData();
    fd.append('file',file);
    return this.http.post<any>("/user/avatar", fd,{
      headers:h,
      params:{
        type:type
      }
    })
  }
}
