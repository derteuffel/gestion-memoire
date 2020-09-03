import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './admin/auth/register/register.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { RegisterSuccessComponent } from './admin/auth/register-success/register-success.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {Ng2Webstorage} from 'ngx-webstorage';
import { MemoireListComponent } from './admin/memoire/memoire-list/memoire-list.component';
import { MemoireAddComponent } from './admin/memoire/memoire-add/memoire-add.component';
import { MemoireDetailsComponent } from './admin/memoire/memoire-details/memoire-details.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {HttpClientInterceptor} from './admin/auth/http-client-interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FileUploadModule} from 'ng2-file-upload';
import { MemoireUpdateComponent } from './admin/memoire/memoire-update/memoire-update.component';
import { HomeComponent } from './guest/home/home.component';
import {HeaderComponent} from './admin/header/header.component';
import {AuthGuard} from './auth.guard';
import { GuestMemoireDetailsComponent } from './guest/guest-memoire-details/guest-memoire-details.component';
import { MemoireUploadComponent } from './admin/memoire/memoire-upload/memoire-upload.component';
import { MemoireDownloadComponent } from './admin/memoire/memoire-download/memoire-download.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    MemoireListComponent,
    MemoireAddComponent,
    MemoireDetailsComponent,
    MemoireUpdateComponent,
    HomeComponent,
    GuestMemoireDetailsComponent,
    MemoireUploadComponent,
    MemoireDownloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Webstorage.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'login', component: LoginComponent},
      {path: 'guest/memoire-details/:id', component: GuestMemoireDetailsComponent},
      {path: 'memoire-list', component: MemoireListComponent, canActivate: [AuthGuard]},
      {path: 'memoire-details/:id', component: MemoireDetailsComponent, canActivate: [AuthGuard]},
      {path: 'memoire-add', component: MemoireAddComponent, canActivate: [AuthGuard]},
      {path: 'memoire-update/:id', component: MemoireUpdateComponent, canActivate: [AuthGuard]},
      {path: 'memoire-upload/:titre', component: MemoireUploadComponent, canActivate: [AuthGuard]},
      {path: 'memoire-download/:titre', component: MemoireDownloadComponent, canActivate: [AuthGuard]},
    ]),
    HttpClientModule,
    EditorModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FileUploadModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
