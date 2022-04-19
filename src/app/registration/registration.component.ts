import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  get userName() {
    return this.registrationForm.get('userName');
  }
  get firstName() {
    return this.registrationForm.get('firstName');
  }


  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: [''],
      confirmPassword: [''],
      email: [' '],
      phoneNumber: [ ' ']
    }, {validator: PasswordValidator});
  }
  

  // registrationForm = new FormGroup({
  //   firstName: new FormControl('Samin'),
  //   lastName: new FormControl(''),
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   email: new FormControl(''),
  //   phoneNumber: new FormControl('')
  // });
// loadApiData() {
//   this.registrationForm.patchValue({
//     firstName: 'Samin',
//     lastName: 'test',
//     userName: 'test',
//     password: 'test',
//     confirmPassword: 'test',
//     email: 'test@test.com',
//     // phoneNumber: '123456789'

//   });
// }
onSubmit(){
  console.log(this.registrationForm.value);
  this._registrationService.register(this.registrationForm.value).subscribe(
    response => console.log('Success!', response),
    error => console.error('error!', error)
  );
}
}
