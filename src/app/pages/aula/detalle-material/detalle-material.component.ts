import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-detalle-material',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './detalle-material.component.html',
  styleUrl: './detalle-material.component.css'
})
export class DetalleMaterialComponent {
  private route = inject(ActivatedRoute);

  readonly id$ = this.route.paramMap.pipe(
    map(params => params.get('id'))
  );

  readonly origen$ = this.route.queryParamMap.pipe(
    map(params => params.get('origen') ?? 'lista')
  );
}
