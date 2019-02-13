import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
// import { HomePageModule } from "./pages/home/home.module";
const routes: Routes = [
  { path: '',
  loadChildren: './tabs/tabs.module#TabsPageModule',
  // pathMatch: 'full',
  canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { preloadingStrategy : PreloadAllModules}*/),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
