import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  conform(message: string, okCallback: () => any) {
    alertify.conform(message, function (e) {
      if (e) okCallback();
      else { }
    })
  }

  Success(message: string) {
    alertify.success(message);
  }
  
  error(message: string) {
    alertify.error(message);
  }

  Message(message: string) {
    alertify.message(message);
  }

}
