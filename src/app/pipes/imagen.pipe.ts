import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const imgUrl = environment.img_url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return './assets/img/no-image-banner.jpg';
    } else {
      const url = `${imgUrl}/${size}/${img}`;
      return url;
    }
  }

}
