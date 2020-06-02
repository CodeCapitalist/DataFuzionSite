import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [  
  { path: 'about', component: AboutComponent },  
  { path: 'contact', component: ContactComponent }, 
  { path: 'landing', component: LandingComponent },
  { path: 'support', component: SupportComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, ContactComponent, LandingComponent, SupportComponent];
