import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMaterialComponent } from './detalle-material.component';

describe('DetalleMaterialComponent', () => {
  let component: DetalleMaterialComponent;
  let fixture: ComponentFixture<DetalleMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
