import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from './../shared/services/repository.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public msg="Sucessful registerd!";

  constructor(private router: Router, private repo: RepositoryService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      userName : new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      telephoneNo: new FormControl()
    })
  }

  public registerData(value){
    console.log(value);
    let formData = new FormData();
    // formData.append('UserName',value.userName);

    let apiUrl = 'register';

    this.repo.createfile(apiUrl, formData)
      .subscribe(res => {
        this.repo.SuccessAlert(res.toString());
        this.router.navigate(['register']);
      },
        (error => {
          this.repo.errorAlert("try again, something wrong!");
        })
      )
  }

  public submitOn(){
    alert(this.msg);
    this.router.navigate(['signup']);
  }

}
