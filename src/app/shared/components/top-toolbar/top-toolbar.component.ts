import { Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {
  userinfo:any;
  constructor(
    public cacheSrv: CacheService
  ) {

  }

  ngOnInit() {
    this.cacheSrv.notify("userinfo").subscribe((data)=>{
      this.userinfo=this.cacheSrv.getNone("userinfo");
    });
  }

}
