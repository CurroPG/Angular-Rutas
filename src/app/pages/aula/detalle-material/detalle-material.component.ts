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
  readonly id$ = inject(ActivatedRoute).paramMap.pipe(
    map(params => params.get('id'))
  );
}
