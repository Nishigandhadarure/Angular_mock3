import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import{HttpClientModule} from'@angular/common/http';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import{MatFormFieldControl}from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    
    MatToolbarModule,
    BrowserAnimationsModule,HttpClientModule,
    MatFormFieldModule,MatInputModule,
    MatButtonModule,FormsModule,ReactiveFormsModule,
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
