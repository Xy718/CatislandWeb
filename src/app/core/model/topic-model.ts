import { PublicUserinfo } from './public-userinfo-model';

/**
 * 帖子类
 * @Author: Xy718
 * @Date: 2020-06-04 23:45:14
 * @LastEditors: Xy718
 * @LastEditTime: 2020-06-04 23:45:30
 */
export class TopicModel {
  liked:string="";
  shared:string="";

  tid: number;
  title: string="";
  content: string="";
  imgs:Array<string>=[];
  create_time: string="";
  update_time: string="";
  pub_userinfo:PublicUserinfo;
}
