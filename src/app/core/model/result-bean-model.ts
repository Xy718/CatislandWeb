/**
 * a Simple Ajax Bean
 * @author Xy718
 * @export
 * @class ResultBeanModel
 */
export class ResultBeanModel<T> {
    code:string="-1";
    msg:string="";
    data:any;

    constructor(code:string,msg:string,data:any){
        this.code=code;
        this.msg=msg;
        this.data=data;
    }

    public static error(msg:string,data?:any){
        return new ResultBeanModel("-1",msg,data);
    }

    public static success(msg:string,data:any){
        return new ResultBeanModel("0",msg,data);
    }
}
