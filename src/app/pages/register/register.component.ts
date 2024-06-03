import {Component} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  name: string = '';
  password: string = '';
  registerError: string = '';

  constructor(private authService: AuthService, private router: Router) {}


  onRegister() {
    this.authService.register(this.name, this.email, this.password).subscribe(
      (response) => {
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      (error) => {
        this.registerError = error.error.message;
      }
    );
  }
}
