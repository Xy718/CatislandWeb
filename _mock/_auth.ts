import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { LoginContentModel } from 'src/app/core/model/login-content-model';
import { MockRequest, MockStatusError } from '@delon/mock';
import { HttpResponse } from '@angular/common/http';
import { RegistContentModel } from 'src/app/core/model/regist-content-model';

const accounts=[
    {username:"admin",password:"123456"},
    {username:"temp",password:"123"},
    {username:"temp2",password:"123"},
    {username:"temp3",password:"123"},
    {username:"temp4",password:"123"},
];

export const AUTH = {
    'POST /auth/login': (req: MockRequest)=>getRandomLogin(req.body),
    'POST /auth/reg': (req: MockRequest)=>getReg(req.body),
};

function getReg(regContent:RegistContentModel) {
    if(accounts.find(acc=>acc.username==regContent.username)){
        return ResultBeanModel.error("账号已存在，注册失败",{});
    }
    accounts.push({username:regContent.username,password:regContent.password});
    return ResultBeanModel.success("注册成功！giao~",{});
}

function getRandomLogin(loginContent:LoginContentModel){
    const acc = accounts.find(acc=> acc.username==loginContent.username);
    if(!acc){
        return new ResultBeanModel("-1","登陆失败,用户名或密码错误",{});
    }
    if(acc.password==loginContent.password){
        //mock 认证通过 
        /*
        {
            "sub": "Xy718Tester",
            "name": "JZF",
            "iat": 1636239022,
            "message":"666啊老铁"
        }
            123456
        */
        return new ResultBeanModel("0","登录成功"
            ,{"jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJYeTcxOFRlc3RlciIsIm5hbWUiOiJKWkYiLCJpYXQiOjE2MzYyMzkwMjIsIm1lc3NhZ2UiOiI2NjbllYrogIHpk4EifQ.jE_3qFVct6Po4mu0ctfnf4EDzsAoee8PY9Saas7y7Cw"});
    }else{
        return new ResultBeanModel("-1","登陆失败,用户名或密码错误",{});
    }
}