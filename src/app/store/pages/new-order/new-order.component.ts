import { Component } from '@angular/core';
import { FormArray, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Order } from '../../shared/interfaces/store.interface';
import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent {
  form!: UntypedFormGroup;
  orderNumber = 1;

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {
    this.createForm();

    this.storeService
      .getOrders()
      .pipe(take(1))
      .subscribe(value => {
        this.orderNumber = value?.length + 1;
      });
  }

  get formProductsArray(): FormArray {
    return this.form.get('products') as FormArray;
  }

  addProduct() {
    const productControl = new UntypedFormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    });

    this.formProductsArray.push(productControl);
  }

  addOrder() {
    const order: Order = {
      orderNumber: this.orderNumber,
      date: new Date().toISOString(),
      products: this.formProductsArray.value,
    };
    this.storeService.addOrder(order);
    this.router.navigate(['./']);
  }

  private createForm() {
    this.form = new UntypedFormGroup({
      products: new FormArray([], Validators.required),
    });
  }
}
