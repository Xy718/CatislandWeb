import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { LoginContentModel } from 'src/app/core/model/login-content-model';
import { MockRequest, MockStatusError } from '@delon/mock';
import { HttpResponse } from '@angular/common/http';

const accounts=[
    {username:"admin",password:"123456"},
    {username:"temp",password:"123"},
    {username:"temp2",password:"123"},
    {username:"temp3",password:"123"},
    {username:"temp4",password:"123"},
];

export const AUTH = {
    'POST /auth/login': (req: MockRequest)=>getRandomLogin(req.body),
    'GET /profile/goods': accounts,
  };

function getRandomLogin(loginContent:LoginContentModel){
    const acc = accounts.find(acc=> acc.username==loginContent.username);
    if(!acc){
        return new ResultBeanModel("-1","登陆失败,用户名或密码错误",{});
    }
    if(acc.password==loginContent.password){
        //mock 认证通过
        return new ResultBeanModel("0","登录成功",{"jwt":"123"});
    }else{
        return new ResultBeanModel("-1","登陆失败,用户名或密码错误",{});
        // return new HttpResponse({
        //     body:new ResultBeanModel("-1","登录失败，用户名或密码不正确",{}),
        //     status:401,
        // });
    }
}