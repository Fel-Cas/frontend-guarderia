import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMascotaComponent } from './info-mascota.component';

describe('InfoMascotaComponent', () => {
  let component: InfoMascotaComponent;
  let fixture: ComponentFixture<InfoMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
