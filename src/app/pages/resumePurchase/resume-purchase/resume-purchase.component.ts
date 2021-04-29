import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Routes} from '../../../enums/routes.enum';



@Component({
  selector: 'app-resume-purchase',
  templateUrl: './resume-purchase.component.html',
  styleUrls: ['./resume-purchase.component.scss']
})
export class ResumePurchaseComponent implements OnInit {

  public routes = Routes;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  submit(){
    this.router.navigate([Routes.CARRIERS]);
  }

}
