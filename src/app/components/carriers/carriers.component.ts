import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.scss']
})
export class CarriersComponent implements OnInit {

  @Input() carriers: any;

  constructor() { }

  ngOnInit(): void {
  }

}
