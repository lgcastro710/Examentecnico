import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MailComponent } from './components/mail/mail.component';
import { LoginComponent } from './components/login/login.component';
import { ValidacionComponent } from './components/validacion/validacion.component';


const ROUTES : Routes = [
    { path: '', component: FormComponent },
    { path: 'mail', component: MailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'validacion', component: ValidacionComponent },
    { path: '**', component: FormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
