import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-404',
  template: `
    <error-code
      code="404"
      [title]="'Page not found!'"
      [message]="'这是个不存在的页面或者操作。。。。'"
    ></error-code>
  `,
})
export class Error404Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
