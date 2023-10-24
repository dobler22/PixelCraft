import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/principal/home/home.component';
import { ContactoComponent } from './component/principal/contacto/contacto.component';
import { JuegosComponent } from './component/principal/juegos/juegos.component';




const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'juegos', component:JuegosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**', pathMatch: 'full', redirectTo:'home'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
