import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public redirectToSignUp(){
    this.router.navigate(['signup']);
  }

  public redirectToRegister(){
    this.router.navigate(['register']);
  }

}
