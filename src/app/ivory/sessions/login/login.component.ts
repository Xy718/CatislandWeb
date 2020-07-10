import { Location } from '@angular/common';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginContentModel } from 'src/app/core/model/login-content-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';
import { MessageService } from 'src/app/shared/services/message.service';
import { CacheService } from '@delon/cache';
import { UserService } from 'src/app/shared/services/user.service';
import { catchError } from 'rxjs/operators';
import { ACLService } from '@delon/acl';

/**
 * @Author: Xy718
 * @Date: 2020-06-19 14:35:09
 * @LastEditors: Xy718
 * @LastEditTime: 2020-06-19 14:39:01
 */
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	encapsulation: ViewEncapsulation.None//去掉对应Component打包出来的css作用域，引入自定义组件才能有样式效果
})
export class LoginComponent implements OnInit {
	reactiveForm: FormGroup;

	loginForm=new LoginContentModel();
	//login状态，用来控制Login按钮
	inLogin=false;

	constructor(
		private fb: FormBuilder
		,private activatedRoute: ActivatedRoute
		,private router: Router
		,private auth:AuthService
		,public snackBar: MatSnackBar
		,private location:Location,
		 @Inject(DA_SERVICE_TOKEN)
		private tokenService: ITokenService,
		private msg:MessageService,
		private cacheSrv:CacheService,
		private userSrv:UserService,
		private aclSrv:ACLService,
	) {
		this.reactiveForm = this.fb.group({
		username: ['', Validators.required],
		password: ['', Validators.required],
		rememberMe: [false],
    });
	}
	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((data)=>{
			if(data.username){
				this.loginForm.username=data.username;
			}
		});
	}

	login() {
		//切换当前的登录状态用于控制表单样式
		this.loginStatus(true);
		//登录
    this.auth.login(this.loginForm)
    .pipe(
      catchError(this.msg.handleError("登录"))
    )
		.subscribe(result=>{
      if(result.code=="0"){//成功
        this.msg.success("登陆成功!");
        //储存jwt
        this.tokenService.set({ token: `${result.data["jwt"]}` });
				//设置缓存
				this.userSrv.getUserSelf().subscribe(data=>{
          this.cacheSrv.set("userinfo",data.data);
          //跳转页面
          this.aclSrv.setRole(['USER']);
          this.router.navigateByUrl('/');
          // this.router.navigate(["/"]);
				});
			}else{
				//清空密码及重新请求验证码
				this.loginForm.password="";
				this.loginStatus(false);
			}
		});
	}

	/**
	 *修改当前form的登陆状态
	*
	* @param {boolean} status t代表正在登陆f代表登录结束
	* @memberof LoginComponent
	*/
	loginStatus(status:boolean){
		this.inLogin=status;
		status?this.reactiveForm.disable():this.reactiveForm.enable();
	}

}
