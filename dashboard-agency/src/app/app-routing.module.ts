import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

const authGuard = async (route: ActivatedRouteSnapshot, routSnap: RouterStateSnapshot) => {
  console.log(route, routSnap);
  const router = inject(Router);
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
}

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(component => component.LoginComponent) },
  { path: 'home', canActivate: [authGuard], loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
