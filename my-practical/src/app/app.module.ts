import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrganizationInterceptor } from './interceptor/organization.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrganizationListComponent,
    AddOrganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot() // Import ToastrModule with default settings

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: OrganizationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
