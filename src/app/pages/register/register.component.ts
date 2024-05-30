import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email : string = ''
  username: string = '';
  password: string = '';
  visible: boolean = false
  dialogMessage: string =''
  
  registerError : string ='';
  
  constructor(private authService: AuthService, private router: Router) {}
  openAndCloseDialog(){
    
    return this.visible= !this.visible
  }
  
  onRegister(){
  
  }
}
