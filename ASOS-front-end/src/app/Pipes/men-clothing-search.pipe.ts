import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Pipe({
  name: 'menClothingSearch'
})
export class MenClothingSearchPipe implements PipeTransform {

  transform(products:IProduct[], searchWord:string):IProduct[] {
    return products.filter(product => product.name.toLowerCase().includes(searchWord.toLowerCase()) );
  }

}
