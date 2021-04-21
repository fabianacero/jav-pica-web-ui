import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  promise: Promise<any>;
  url = 'https://sdk.mercadopago.com/js/v2';
  urlJquery = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';

  loadScripts() {
    /* const node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

    const nodeJQuery = document.createElement('script');
    nodeJQuery.src = this.urlJquery;
    nodeJQuery.type = 'text/javascript';
    nodeJQuery.async = true;
    nodeJQuery.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(nodeJQuery);
    return true;*/
  }

  constructor() {
  }

  ngOnInit(): void {
    /*this.promise = new Promise((resolve) => {
      resolve(this.loadScripts());
    }).then(() => {
      setTimeout(() => {
        // configuraciones aquí
        console.log('Loaded scripts.');
        this.toOrderFunction();
      }, 2000);
    });*/
  }

  public toOrderFunction() {
    // REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://www.mercadopago.com/developers/panel
    /*const mp = new MercadoPago('TEST-3b0f2cb9-8bd6-439b-9ae9-7827da55a01f');

    function loadCardForm() {
      const productCost = document.getElementById('amount').value;
      const productDescription = document.getElementById('product-description').innerText;

      const cardForm = mp.cardForm({
        amount: productCost,
        autoMount: true,
        form: {
          id: 'form-checkout',
          cardholderName: {
            id: 'form-checkout__cardholderName',
            placeholder: 'Holder name',
          },
          cardholderEmail: {
            id: 'form-checkout__cardholderEmail',
            placeholder: 'E-mail',
          },
          cardNumber: {
            id: 'form-checkout__cardNumber',
            placeholder: 'Card number',
          },
          cardExpirationMonth: {
            id: 'form-checkout__cardExpirationMonth',
            placeholder: 'MM',
          },
          cardExpirationYear: {
            id: 'form-checkout__cardExpirationYear',
            placeholder: 'YY',
          },
          securityCode: {
            id: 'form-checkout__securityCode',
            placeholder: 'Security code',
          },
          installments: {
            id: 'form-checkout__installments',
            placeholder: 'Installments',
          },
          identificationType: {
            id: 'form-checkout__identificationType',
          },
          identificationNumber: {
            id: 'form-checkout__identificationNumber',
            placeholder: 'Identification number',
          },
          issuer: {
            id: 'form-checkout__issuer',
            placeholder: 'Issuer',
          },
        },
        callbacks: {
          onFormMounted: error => {
            if (error) {
              return console.warn('Form Mounted handling error: ', error);
            }
            console.log('Form mounted');
          },
          onSubmit: event => {
            event.preventDefault();

            const {
              paymentMethodId,
              issuerId,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData();

            fetch('/process_payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                token,
                issuerId,
                paymentMethodId,
                transactionAmount: Number(amount),
                installments: Number(installments),
                description: productDescription,
                payer: {
                  email,
                  identification: {
                    type: identificationType,
                    number: identificationNumber,
                  },
                },
              }),
            })
              .then(response => {
                return response.json();
              })
              .then(result => {
                document.getElementById('payment-status').innerText = result.status;
                document.getElementById('payment-detail').innerText = result.message;
                $('.container__payment').fadeOut(500);
                setTimeout(() => {
                  $('.container__result').show(500).fadeIn();
                }, 500);
              })
              .catch(error => {
                alert('Unexpected error\n' + JSON.stringify(error));
              });
            ;
          },
          onFetching: (resource) => {
            console.log('Fetching resource: ', resource);
            const payButton = document.getElementById('form-checkout__submit');
            payButton.setAttribute('disabled', true);
            return () => {
              payButton.removeAttribute('disabled');
            };
          },
        },
      });
    };

//Handle transitions
    document.getElementById('checkout-btn').addEventListener('click', function() {
      $('.container__cart').fadeOut(500);
      setTimeout(() => {
        loadCardForm();
        $('.container__payment').show(500).fadeIn();
      }, 500);
    });
    document.getElementById('go-back').addEventListener('click', function() {
      $('.container__payment').fadeOut(500);
      setTimeout(() => {
        $('.container__cart').show(500).fadeIn();
      }, 500);
    });

//Handle price update
    function updatePrice() {
      let quantity = document.getElementById('quantity').value;
      let unitPrice = document.getElementById('unit-price').innerText;
      let amount = parseInt(unitPrice) * parseInt(quantity);

      document.getElementById('cart-total').innerText = '$ ' + amount;
      document.getElementById('summary-price').innerText = '$ ' + unitPrice;
      document.getElementById('summary-quantity').innerText = quantity;
      document.getElementById('summary-total').innerText = '$ ' + amount;
      document.getElementById('amount').value = amount;
    };
    document.getElementById('quantity').addEventListener('change', updatePrice);
    updatePrice();*/
  }

}