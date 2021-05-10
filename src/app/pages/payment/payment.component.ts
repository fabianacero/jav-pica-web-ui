import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {Router} from '@angular/router';
import {Routes} from '../../enums/routes.enum';
import {Utilities} from '../../utilities/utilities';
import {PaymentService} from '../../provider/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private payment: PaymentService,private router: Router,
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
    this.payment.paymentProduct(cc).subscribe((data) => { // Success
      
      this.payment.createOrder(JSON.parse(localStorage.getItem('order'))).subscribe((data) => { // Success
        Swal.fire(
          "Orden creada Exitosamente Nro "+ data.idOrden,
          `el pedido a sido creado con exito!`,
          "success"
        ).then((result) => {
          if (result.value) {
            localStorage.clear();
            this.router.navigate([Routes.HOME]);
          }
        })
      });
    },
    (error) => {
      console.error(error);
    }
  );
  }

}
