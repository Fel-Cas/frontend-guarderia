import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPropietarioComponent } from './signup-propietario.component';

describe('SignupPropietarioComponent', () => {
  let component: SignupPropietarioComponent;
  let fixture: ComponentFixture<SignupPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
