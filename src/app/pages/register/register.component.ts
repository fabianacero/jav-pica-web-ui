import { Component, OnInit } from "@angular/core";
import { Register } from "@models/register";
import { Routes } from "../../enums/routes.enum";
import { RegisterService } from "@provider/register/register.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  RegisterForms: FormGroup;
  register: Register;
  Respuesta: String;
  public routes = Routes;
  constructor(
    public fb: FormBuilder,
    private RegisterService: RegisterService,
    private router: Router
  ) {
    this.RegisterForms = this.fb.group({
      idType: ["", [Validators.required, Validators.minLength(5)]],
      id: ["", [Validators.required, Validators.minLength(5)]],
      names: ["", [Validators.required, Validators.minLength(5)]],
      surnames: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.minLength(5)]],
      telephone: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(5)]],
      role: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.RegisterForms.reset({ role: "1", idType: "" });
    this.Respuesta = "Cliente";
  }

  asigRol(rol: string) {
    this.RegisterForms.value.role = rol;
    if (rol === "1") {
      this.Respuesta = "Cliente";
      this.RegisterForms.reset({ role: "1", idType: "" });
    } else {
      this.Respuesta = "Proveedor";
      this.RegisterForms.reset({ role: "2", idType: "" });
    }
  }

  registerUser() {
    this.RegisterService.registerUser(this.RegisterForms.value).subscribe(
      () =>
        Swal.fire(
          "Registro Exitoso",
          `la cuenta se ha creado con éxito!`,
          "success"
        ).then((result) => {
          if (result.value) {
            this.router.navigate([Routes.LOGIN]);
          }
        }),
      () => alert("Error Intente Nuevamente")
    );
  }
}
