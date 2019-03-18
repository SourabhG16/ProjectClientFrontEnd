import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, EmailValidator, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';

// import { EMAIL_VALIDATOR } from '@angular/forms/src/directives/validators';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: './register.page.html',
})
export class RegisterPage implements OnInit {
  credentialsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService , private router: Router) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Name: ['', Validators.required],
       Age: [null, Validators.required],
       Gender: ['', Validators.required],
       Type:['',Validators.required],
       Birthdate: ['', Validators.required],
       Address: ['', Validators.required],
       Email: ['', [EmailValidator, Validators.required]],
       IdReceiver: ['', Validators.required],
       Confirm: ['', [Validators.required, Validators.minLength(6)]]
    });
    // {
    //   validator: PasswordValidation.MatchPassword // your validation method
    // });
  }
  register() {
    this.authService.register(this.credentialsForm.value).subscribe(res => {
      // Call Login to automatically login the new user
      // this.authService.login(this.credentialsForm.value).subscribe();
      // redirect to login page
      this.router.navigateByUrl('/login');
    });
  }
}
export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
     let password = AC.get('Password').value; // to get value in input tag
     let confirmPassword = AC.get('Confirm').value; // to get value in input tag
      if(password !== confirmPassword) {
          console.log('false');
          AC.get('Confirm').setErrors( {MatchPassword: true} )
      } else {
          console.log('true');
          return null;
      }
  }
}
