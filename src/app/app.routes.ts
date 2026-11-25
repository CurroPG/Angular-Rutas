import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AulaComponent } from './pages/aula/aula.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'aula', component: AulaComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'portal', redirectTo: '/aula', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent }
];
