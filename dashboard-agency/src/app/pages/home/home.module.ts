import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentDeskComponent } from './agent-desk/agent-desk.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Homecomponent } from './home.component';

const router: Routes = [
  { path: '', component: Homecomponent },
  { path: 'agent-desk', component: AgentDeskComponent },
  { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AgentDeskComponent,
    DashboardComponent,
    Homecomponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderComponent,
    RouterModule.forChild(router)
  ],
  exports: [
    AgentDeskComponent,
    DashboardComponent,
    Homecomponent
  ]
})
export class HomeModule {


}
