import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTComponent } from './signup-t.component';

describe('SignupTComponent', () => {
  let component: SignupTComponent;
  let fixture: ComponentFixture<SignupTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
