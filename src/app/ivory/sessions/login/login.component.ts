import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { LoginContentModel } from 'src/app/core/model/login-content-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None//去掉对应Component打包出来的css作用域，引入自定义组件才能有样式效果
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  
  //login状态，用来控制Login按钮
  inLogin=false;

  constructor(
    private fb: FormBuilder
    ,private router: Router
    ,private auth:AuthService
  ) {
    this.reactiveForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }
  loginForm=new LoginContentModel();
  ngOnInit() {}

  login() {
    //切换当前的登录状态用于控制表单样式
    this.inLogin=true;
    this.reactiveForm.disable();
    //登录
    this.auth.login(this.loginForm);
  }
}
