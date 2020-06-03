/**
 * a Simple Ajax Bean
 * @author Xy718
 * @export
 * @class ResultBeanModel
 */
export class ResultBeanModel {
    code:String="-1"; 
    msg:String="";
    data:Object={}; 

    constructor(code:String,msg:String,data:Object){
        this.code=code;
        this.msg=msg;
        this.data=data;
    }

    public static error(msg:String,data:Object){
        return new ResultBeanModel("-1",msg,data);
    }
}
