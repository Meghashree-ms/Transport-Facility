import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RidesComponent } from './components/rides/rides.component';
import { AddRidesComponent } from './components/add-rides/add-rides.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'add-ride', component: AddRidesComponent },
  // { path: 'book-ride/:id', component: BookRideComponent },/
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/login' } // wildcard (any invalid URL)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
