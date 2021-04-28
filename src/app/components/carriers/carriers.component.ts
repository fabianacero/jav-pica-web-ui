import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.scss']
})
export class CarriersComponent implements OnInit {

  @Input() carriers: any;
  @Output() carrierEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
