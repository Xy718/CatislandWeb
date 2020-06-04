import { Injectable } from '@angular/core';
import { BaseUrl, BaseHeaders, GET, BaseApi } from '@delon/theme';
import { Observable } from 'rxjs';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';

@BaseUrl('/topic')
@BaseHeaders({ 'Content-Type': 'application/json' })
@Injectable({
    providedIn: 'root'
})
export class TopicService extends BaseApi{

    @GET("/all")
	getAllTopic():Observable<ResultBeanModel>{
		return ;
	}
}
