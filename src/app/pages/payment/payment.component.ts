import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {Router} from '@angular/router';
import {Routes} from '../../enums/routes.enum';
import {Utilities} from '../../utilities/utilities';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router,
    private utilities: Utilities) {
    window.localStorage.setItem('previousUrl', this.router.url);
  }

  public routes = Routes;

  ngOnInit(): void {
    if (this.utilities.getFromSession('session') === null) {
      Swal.fire({
      icon: 'error',
      title: 'Se Quiere Autenticación',
      text: 'Para Agregar su metodo de pago se requiere autenticación',
      footer: '<a href="/registro">No tiene cuenta? Registrese Aqui</a>',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {
        this.router.navigate([Routes.LOGIN]);
      }
    })
  }
}

  processPayment(cc: any) {
    console.log('cc, ', cc);
  }

}
