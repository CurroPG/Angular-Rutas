import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-materiales',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './materiales.component.html',
  styleUrl: './materiales.component.css'
})
export class MaterialesComponent {
  private route = inject(ActivatedRoute);

  readonly orden$ = this.route.queryParamMap.pipe(
    map(params => params.get('orden') ?? 'asc')
  );

  readonly tipo$ = this.route.queryParamMap.pipe(
    map(params => params.get('tipo') ?? 'todos')
  );

  constructor() {
    console.log('MaterialesComponent creado');
  }
}
