import { Component } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    NavigationBarComponent,
    ActiveUserComponent
  ]
})
export class HeaderComponent {
  title = 'Dashboard Agenzia Immobiliare'

}
