import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../interfaces/store.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private ordersListStore = new BehaviorSubject<Array<Order>>([]);
  public ordersList$ = this.ordersListStore.asObservable();

  addOrder(orderValue: Order) {
    this.ordersListStore.next([...this.ordersListStore.getValue(), orderValue]);
  }

  getOrders(): Observable<Array<Order>> {
    return this.ordersList$;
  }
}
