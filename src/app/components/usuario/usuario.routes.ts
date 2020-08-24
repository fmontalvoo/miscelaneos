import { Routes } from '@angular/router';

import { NuevoUsuarioComponent } from './nuevo-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario.component';

const ROUTES: Routes = [

    { path: 'nuevo', component: NuevoUsuarioComponent },
    { path: 'editar', component: EditarUsuarioComponent },
    { path: 'detalle', component: DetalleUsuarioComponent },
    { path: '**', redirectTo: 'nuevo', pathMatch: 'full' }

];

export const USUARIO_ROUTES = ROUTES;