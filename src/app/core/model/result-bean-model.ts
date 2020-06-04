/**
 * a Simple Ajax Bean
 * @author Xy718
 * @export
 * @class ResultBeanModel
 */
export class ResultBeanModel {
    code:string="-1"; 
    msg:string="";
    data:Object={}; 

    constructor(code:string,msg:string,data:Object){
        this.code=code;
        this.msg=msg;
        this.data=data;
    }

    public static error(msg:string,data:Object){
        return new ResultBeanModel("-1",msg,data);
    }
}
