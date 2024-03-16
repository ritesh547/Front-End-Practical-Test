import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { AuthGuard } from './guard/authguard.guard';
import { AddOrganizationComponent } from './add-organization/add-organization.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'organization-list', component: OrganizationListComponent, canActivate: [AuthGuard] },
  { path: 'add-organization', component: AddOrganizationComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
