import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor(
    private msgSrv: MessageService
  ) { }

  ngOnInit() {
  }
  donate(): void {
    this.msgSrv.success('假的投食图标❥(^_-)');
  }
}
