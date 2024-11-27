import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparcanaCrearComponent } from './aparcana-crear.component';

describe('AparcanaCrearComponent', () => {
  let component: AparcanaCrearComponent;
  let fixture: ComponentFixture<AparcanaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AparcanaCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparcanaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
