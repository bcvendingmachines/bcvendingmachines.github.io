import { Pipe, PipeTransform } from '@angular/core';
import {Machine} from "../model/machine";

@Pipe({
  name: 'machinePipe'
})
export class MachinePipe implements PipeTransform {

  transform(value: Machine[], ...args: unknown[]): Machine[] {
    return value;
  }

}
