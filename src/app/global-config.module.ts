// global-config.module.ts
import { AlainConfig, ALAIN_CONFIG } from '@delon/util';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import * as MOCKDATA from '../../_mock';
import { environment } from 'src/environments/environment';
import { throwIfAlreadyLoaded } from './core/module-import-guard';
import { DelonMockModule } from '@delon/mock';

let exp_module=[];
const alainConfig: AlainConfig = {
	//配置@delon/auth
	auth:{
		token_invalid_redirect: true,
		/**
		 * 发送token参数名，默认：·
		 */
		// token_send_key: "token",
		token_send_template: 'Bearer ${token}',
		token_send_place: 'header',
		//登录页路由地址
		login_url: "/auth/login",
		//是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法，默认：`true`
    executeOtherInterceptors:true,
    //TODO 这个部分需要从后端加载无验证的url
		ignores:[
      /\/auth\/*/
      , /assets\/*/
      , /topic\/all/
      // , /\/user/
    ]
  },
  cache:{
    mode:'none'
  }
};

//根据环境确定是否启用mock
// if (!environment.production) {
//   alainConfig.mock = { data: MOCKDATA };
//   exp_module=[DelonMockModule.forRoot(),];
// }

const alainProvides = [{ provide: ALAIN_CONFIG, useValue: alainConfig }];

@NgModule({
  imports:[...exp_module],
  providers: [
    { provide: ALAIN_CONFIG, useValue: alainConfig },
  ],
})
export class GlobalConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: GlobalConfigModule) {
    throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalConfigModule,
      providers: [...alainProvides],
    };
  }
}
