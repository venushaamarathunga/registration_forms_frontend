import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './../services/environment-url.service';
import { AlertifyService } from './alertify.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService, private alertify: AlertifyService) { }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  public create(route: string, body) {
    return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress), body, this.generateHeaders());
  }

  public createfile(route: string, body) {
    return this.http.post(this.createCompleteRoutefile(route, this.envUrl.urlAddress), body, this.generateHeadersfile());
  }

  private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }

  private createCompleteRoutefile(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

  private generateHeadersfile() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'bearer ' + localStorage.getItem('token'),
        'enctype': 'multipart/form-data'
      })
    }
  }

  SuccessAlert(message: string) {
    this.alertify.Success(message);
  }

  errorAlert(message: string) {
    this.alertify.error(message);
  }

  MessageAlert(message: string) {
    this.alertify.Message(message);
  }

}
