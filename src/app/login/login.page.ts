import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';
//  import { Http } from '@angular/http';
// import { HTTP, HTTPOriginal } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';
// import { NavController } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentialsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
     this.credentialsForm = this.formBuilder.group({
       email: ['', Validators.required],
       password: ['', [Validators.required, Validators.minLength(6)]]
     });
  }
  onSubmit() {
    // console.log('In sign in');
    this.authService.login(this.credentialsForm.value).subscribe();
    // this.ngOnInit();
  }
  // register_func() {
  //   this.router.navigateByUrl('/register');
  // }

  // call this function from register page
  register() {
    //  this.authService.register(this.credentialsForm.value).subscribe(res => {
    //    // Call Login to automatically login the new user
    //    this.authService.login(this.credentialsForm.value).subscribe();
    //  });
     this.router.navigateByUrl('/register');
    // this.router.navigate(['sample'])

   }
  // send_req() {
  //   console.log('in req');
  //   const data = {
  //     'email': 'baiguzair123@gmail.com',
  //     'password': 'uzair123'
  // };
  //   this.http.post('http://localhost:5000/api/login', data).pipe().subscribe(response => {
  //     console.log('post res', response);
  //   });
  // console.log('after req');
  // }
}
