/**
 * a Simple Ajax Bean
 * @author Xy718
 * @export
 * @class ResultBeanModel
 */
export class ResultBeanModel<T> {
    code:string="-1"; 
    msg:string="";
    data:T; 

    constructor(code:string,msg:string,data:T){
        this.code=code;
        this.msg=msg;
        this.data=data;
    }

    public static error(msg:string,data:any){
        return new ResultBeanModel("-1",msg,data);
    }
}
