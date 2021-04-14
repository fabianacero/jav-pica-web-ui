import { Component, OnInit } from '@angular/core';
import { Routes } from "@app/enums/routes.enum";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  public routes = Routes;

  constructor() { }

  ngOnInit(): void {
  }

}
