import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true, 
})
export class DefaultImagePipe implements PipeTransform {
  transform(imageUrl: string | null | undefined, fallback: string = 'assets/article-default.jpg'): string {
    const url = (imageUrl ?? '').trim();
    return url.length > 0 ? url : fallback;
  }
}
