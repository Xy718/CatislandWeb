import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None//去掉对应Component打包出来的css作用域，引入自定义组件才能有样式效果
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  
  mode = 'determinate';
  //login状态，用来控制Login按钮
  inLogin=false;

  constructor(
    private fb: FormBuilder
    ,private router: Router
    ,private auth:AuthService
  ) {
    this.reactiveForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    this.inLogin=true;
    document.getElementById("loadingSpinner").style.display="block";
    this.auth.login();
  }
}
