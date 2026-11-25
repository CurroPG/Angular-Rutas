import { Routes } from '@angular/router';
import { AulaComponent } from './aula.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { DetalleMaterialComponent } from './detalle-material/detalle-material.component';

export const AULA_ROUTES: Routes = [
  {
    path: '',
    component: AulaComponent,
    children: [
      { path: '', redirectTo: 'materiales', pathMatch: 'full' },
      { path: 'materiales', component: MaterialesComponent },
      { path: 'materiales/:id', component: DetalleMaterialComponent },
      {
        path: 'avisos',
        loadComponent: () =>
          import('./avisos/avisos.component')
            .then(m => m.AvisosComponent)
      }
    ]
  }
];
