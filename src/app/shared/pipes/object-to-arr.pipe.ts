import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'objectintoarr'
})
export class ObjectToArrPipe implements PipeTransform
{
    transform(value: any, args?: any){
        if(Array.isArray(value))return value;
        else return Object.entries(value);
    }

}