import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { ORLComponent } from './components/orl/orl.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginTestComponent},
  {path: 'home', component: HomeComponent},
  {path: 'otorrino', component: ORLComponent},
  {path: 'sobre-mi', component: HomeComponent},
  {path: 'contacto', component: HomeComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
