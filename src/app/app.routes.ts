import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'aula',
    loadChildren: () =>
      import('./pages/aula/aula.routes')
        .then(m => m.AULA_ROUTES)
  },
  {
    path: 'ayuda',
    loadComponent: () =>
      import('./pages/ayuda/ayuda.component')
        .then(m => m.AyudaComponent)
  },
  { path: 'portal', redirectTo: '/aula', pathMatch: 'full' },
  { path: 'antiguo-material/:id', redirectTo: '/aula/materiales/:id', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent }
];
