import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeadComponent } from './components/head/head.component';
import { FormComponent } from './components/form/form.component';
import { AppRoutingModule } from './app.routes';
import { MailComponent } from './components/mail/mail.component';
import { LoginComponent } from './components/login/login.component';
import { ValidacionComponent } from './components/validacion/validacion.component';
import {MatRadioModule} from '@angular/material/radio';
import { TablaComponent } from './components/tabla/tabla.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';



const modules = [  
  MatIconModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatTooltipModule,
  MatInputModule,
  MatTabsModule,
  MatSelectModule,
  MatToolbarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FormComponent,
    MailComponent,
    LoginComponent,
    ValidacionComponent,
    TablaComponent,
    
  ],
  imports: [
    BrowserModule,
    modules,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
