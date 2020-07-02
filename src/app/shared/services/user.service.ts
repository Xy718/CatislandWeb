import { Injectable } from '@angular/core';
import { BaseUrl, BaseHeaders, BaseApi, GET } from '@delon/theme';
import { Observable } from 'rxjs';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { TopicModel } from 'src/app/core/model/topic-model';

@BaseUrl('/user')
@BaseHeaders({ 'Content-Type': 'application/json' })
@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseApi{

  @GET()
	getUserSelf():Observable<ResultBeanModel<any>>{
		return ;
	}
}
