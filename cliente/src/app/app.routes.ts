import { Routes } from '@angular/router';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';

export const routes: Routes = [
    {path: '', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
];
