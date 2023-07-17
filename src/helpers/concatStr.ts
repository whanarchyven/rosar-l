export default function concatStr (str:string,num:number) {
    if(str.split(' ').length<num){
        return str
    }
    else{
        return str.split(' ').slice(0,num).join(' ')+' ...'
    }
}