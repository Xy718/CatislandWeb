/**
 * 登陆BO
 * @Author: Xy718
 * @Date: 2020-05-31 02:06:53
 * @LastEditors: Xy718
 * @LastEditTime: 2020-05-31 15:27:25
 */
export class LoginContentModel { 
    /**
     *用户名
     *
     * @type {String}
     * @memberof LoginContentModel
     */
    username:String='';
    /**
     *密码
     *
     * @type {String}
     * @memberof LoginContentModel
     */
    password:String='';

    /**
     *记住我
     * true:是
     * flase:否
     * @type {Boolean}
     * @memberof LoginContentModel
     */
    rememberMe:Boolean=false;
}