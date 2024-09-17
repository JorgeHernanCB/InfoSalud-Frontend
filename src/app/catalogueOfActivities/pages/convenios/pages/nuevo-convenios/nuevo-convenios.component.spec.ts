import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoConveniosComponent } from './nuevo-convenios.component';

describe('NuevoConveniosComponent', () => {
  let component: NuevoConveniosComponent;
  let fixture: ComponentFixture<NuevoConveniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoConveniosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
