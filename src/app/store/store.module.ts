import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';
import { NewProductComponent } from './pages/new-order/components/new-product/new-product.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { StoreListComponent } from './pages/store-list/store-list.component';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
  declarations: [StoreListComponent, NewOrderComponent, NewProductComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StoreModule {}
