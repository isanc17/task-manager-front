import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast!: any;

  public openToast(
    title: string = 'Title error',
    description: string = '',
    type: string = 'WARNING'
  ) {
    this.toast = document.querySelector('bdb-at-toast');

    this.toast.titleToast = title;
    this.toast.textDesc = description;
    this.toast.type = type;

    this.toast!.show();
  }
}
