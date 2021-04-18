import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUsersComponent } from './login-users.component';

describe('LoginComponent', () => {
  let component: LoginUsersComponent;
  let fixture: ComponentFixture<LoginUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
