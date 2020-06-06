/**
 * 注册BO
 * @Author: Xy718
 * @Date: 2020-05-31 02:06:53
 * @LastEditors: Xy718
 * @LastEditTime: 2020-06-07 02:43:34
 */
export class RegistContentModel { 
    /**
     *用户名
     *
     * @type {string}
     * @memberof LoginContentModel
     */
    username:string='';
    /**
     *密码
     *
     * @type {string}
     * @memberof LoginContentModel
     */
    password:string='';

    /**
     *协议
     * true:是
     * flase:否
     * @type {boolean}
     * @memberof LoginContentModel
     */
    eula:boolean=false;
}