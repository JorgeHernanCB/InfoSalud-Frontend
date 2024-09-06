import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private imageSource = new BehaviorSubject<string | ArrayBuffer | null>(null);
  currentImage = this.imageSource.asObservable();

  changeImage(image: string | ArrayBuffer | null) {
    this.imageSource.next(image);
  }
}