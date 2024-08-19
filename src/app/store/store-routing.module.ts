import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { StoreListComponent } from './pages/store-list/store-list.component';

const routes: Routes = [
  { path: '', component: StoreListComponent },
  { path: 'new-order', component: NewOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
