import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/About/about.component';
import { ContactComponent } from './components/Contact/contact.component';
import { HomeComponent } from './components/Home/home.component';
import { PagenotfoundComponent } from './components/PageNotFound/pagenotfound.component';
import { ProcessComponent } from './components/Process/process.component';
import { ServicesComponent } from './components/Services/services.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:"process",component:ProcessComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
