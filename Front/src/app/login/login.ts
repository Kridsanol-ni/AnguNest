import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  content:string = 'Login';

  changeForm(value:string){
    this.content = value;
  }
}
