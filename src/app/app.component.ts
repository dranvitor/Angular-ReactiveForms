import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_app';

  constructor(
    private dialog: MatDialog

  ){}

  reactiveData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
    adress: new FormControl('', [Validators.required, Validators.minLength(3)]),
    complement: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(3)])
  }) 


submit(): void{
console.log(`name = ${this.reactiveData.controls['name'].value}`)
console.log(`lastname= ${this.reactiveData.controls['lastname'].value}`)
console.log(`username = ${this.reactiveData.controls['username'].value}`)
console.log(`phonenumber = ${this.reactiveData.controls['phonenumber'].value}`)
console.log(`adress = ${this.reactiveData.controls['adress'].value}`)
console.log(`complement = ${this.reactiveData.controls['complement'].value}`)
console.log(`password = ${this.reactiveData.controls['password'].value}`)
console.log(`confirmPassword = ${this.reactiveData.controls['confirmPassword'].value}`)

}

showDialog(): void {
  let ref = this.dialog.open(DialogComponent)
  ref.componentInstance.name = this.reactiveData.controls['name'].value
  ref.componentInstance.lastname = this.reactiveData.controls['lastname'].value
  ref.componentInstance.username = this.reactiveData.controls['username'].value
  ref.componentInstance.phonenumber = this.reactiveData.controls['phonenumber'].value
  ref.componentInstance.adress = this.reactiveData.controls['adress'].value
  ref.componentInstance.complement = this.reactiveData.controls['complement'].value
  ref.componentInstance.password = this.reactiveData.controls['password'].value
  ref.componentInstance.confirmPassword = this.reactiveData.controls['confirmPassword'].value
 }

}