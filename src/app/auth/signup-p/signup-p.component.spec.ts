import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPComponent } from './signup-p.component';

describe('SignupPComponent', () => {
  let component: SignupPComponent;
  let fixture: ComponentFixture<SignupPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupPComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SignupPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
