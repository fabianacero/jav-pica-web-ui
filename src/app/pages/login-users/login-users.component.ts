import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginUsersService } from "@provider/login-users/login-users.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState, selectAuthState } from "@app/store/auth/app.states";
import { LogIn } from "@app/store/auth/actions/auth.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login-users.component.html",
  styleUrls: ["./login-users.component.scss"],
})
export class LoginUsersComponent implements OnInit {
  LoginForms: FormGroup;
  getState: Observable<any>;
  errorMessage: string | null;
  constructor(
    public fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
    this.LoginForms = this.fb.group({
      email: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  loginUser() {
    this.errorMessage = null;
    this.store.dispatch(new LogIn(this.LoginForms.value));
  }
}
