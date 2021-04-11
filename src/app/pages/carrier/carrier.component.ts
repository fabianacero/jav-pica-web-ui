import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../components/base/base.component";

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent extends BaseComponent implements OnInit {

  ngOnInit(): void {
    this.getAllCarriers();
  }

}
