import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

const ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user/:id',
        component: UsuarioComponent,
        children: USUARIO_ROUTES
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);