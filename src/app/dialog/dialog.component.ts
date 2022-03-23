import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  name: string = ''
  lastname: string  = ''
  username: string  = ''
  phonenumber: string = ''
  adress: string = ''
  complement: string = ''
  password: string = ''
  confirmPassword: string = ''

  constructor() {     
  }

  ngOnInit(): void {
  }

}
