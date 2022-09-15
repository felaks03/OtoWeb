import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlicanteCComponent } from './components/alicante-c/alicante-c.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SanvicenteCComponent } from './components/sanvicente-c/sanvicente-c.component';
import { HomeComponent } from './components/home/home.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { ORLComponent } from './components/orl/orl.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'otorrino', component: ORLComponent},
  {path: 'sobre-mi', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'alicante', component: AlicanteCComponent},
  {path: 'sanvicente', component: SanvicenteCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
