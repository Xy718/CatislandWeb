import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { LoginContentModel } from 'src/app/core/model/login-content-model';
import { MockRequest, MockStatusError } from '@delon/mock';

const accounts=[
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
        throw new MockStatusError(401);
    }
    if(acc.password==loginContent.password){
        //mock 认证通过
        return new ResultBeanModel("0","登录成功",{});
    }else{
        throw new MockStatusError(401);
    }
}