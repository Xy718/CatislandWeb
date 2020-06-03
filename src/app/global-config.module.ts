// global-config.module.ts
import { AlainConfig, ALAIN_CONFIG } from '@delon/util';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import * as MOCKDATA from '../../_mock';
import { environment } from 'src/environments/environment';
import { throwIfAlreadyLoaded } from './core/module-import-guard';
import { DelonMockModule } from '@delon/mock';

let exp_module=[];
const alainConfig: AlainConfig = {
  st: { ps: 3 },
};

//TODO 记得删掉
alainConfig.mock = { data: MOCKDATA };
exp_module=[DelonMockModule.forRoot(),];
if (!environment.production) {
  alainConfig.mock = { data: MOCKDATA };
  exp_module=[DelonMockModule.forRoot(),];
}

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
