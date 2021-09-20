import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMascotaComponent } from './signup-mascota.component';

describe('SignupMascotaComponent', () => {
  let component: SignupMascotaComponent;
  let fixture: ComponentFixture<SignupMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
