import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard-agency';

  constructor(private primengConfig: PrimeNGConfig, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    if (this.authService.isLoggedIn()) this.router.navigate(['/home']);
  }
}
