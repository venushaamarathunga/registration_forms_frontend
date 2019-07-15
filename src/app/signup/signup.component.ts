import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RepositoryService } from './../shared/services/repository.service'
import { from } from 'rxjs';
import { error } from 'util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  public result: any;
  public signUpForm: FormGroup;

  constructor(private repo:RepositoryService,private router: Router) { }

  ngOnInit() {
    this.getSignUp();
    this.signUpForm = new FormGroup({
      userName : new FormControl(),
      password : new FormControl() 
    })
  }

  public signUpData(Value){
    console.log(Value);
    let formData = new FormData();

    let apiUrl = 'signup';
    
    this.repo.createfile(apiUrl,formData)
    .subscribe(res => {
      this.repo.SuccessAlert(res.toString());
      this.router.navigate([apiUrl]);
    },
      (error => {
        this.repo.errorAlert("try again, something wrong!");
      })
    )
  }

  // public getSignUp() {
  //   this.repo.getData('/signup')
  //     .subscribe(res => {
  //       this.result = res;
  //       console.log(this.result);
  //     },
  //     (error => {
  //       // console.log("error");
  //     })
  // }

  public getSignUp(){
    // let apiAddress: string = "Cricketmatch/viewteammembers/"+this.eventId;

    this.repo.getData("/signup")
    .subscribe(res => {
      this.result = res;
    },(error =>{

    })
    )
  }

  public redirectToMainPage(){
    this.router.navigate(['mainpage']);
  }

}
