import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cCode',
  standalone: true
})
export class CCodePipe implements PipeTransform {

  transform(value: number, country?:string) {
    let code = "+91";
    if(country == "USA") code = "+1";
    return code + value;
  }
}
