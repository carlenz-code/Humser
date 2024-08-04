import { Routes } from '@angular/router';
import { PrincipalComponent } from './home/principal/principal.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdPrincipalComponent } from './admin/ad-principal/ad-principal.component';


export const routes: Routes = [

    {path: '',component: PrincipalComponent},
    {path: 'login',component: LoginComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'admin',component: AdPrincipalComponent},

];  
