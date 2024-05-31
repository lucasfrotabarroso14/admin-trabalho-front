import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  name: string = '';
  password: string = '';
  visible: boolean = false;
  dialogMessage: string = '';
  registerError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  openAndCloseDialog() {
    this.visible = !this.visible;
  }

  onRegister() {
    this.authService.register(this.name, this.email, this.password).subscribe(
      (response) => {
    
        this.dialogMessage = 'Registro bem-sucedido! Por favor, faça login.';
        this.openAndCloseDialog();
        setTimeout(() => {
          this.openAndCloseDialog();
          this.router.navigate(['/login']);
        }, 3000);
      },
      (error) => {
        
        this.registerError = error.error.message;
        this.dialogMessage = 'Erro no registro: ' + this.registerError;
        this.openAndCloseDialog();
      }
    );
  }
}
