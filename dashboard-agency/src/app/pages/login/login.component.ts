import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule
  ],
})
export class LoginComponent {
  loginService = inject(LoginService);
  router = inject(Router);

  login(username: string = 'admin', password: string = 'admin') {
    this.loginService.login(username, password).subscribe(
      () => this.router.navigate(['/home']),
    );
  }

}
