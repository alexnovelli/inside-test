import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../../shared/interfaces/store.interface';
import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StoreListComponent {
  eColumnsNames: { [key: string]: string } = {
    orderNumber: 'Número do pedido',
    date: 'Data',
  };

  dataControl: Order[] = [];

  dataSource!: MatTableDataSource<Order>;
  expandedElement!: Order | null;

  columnsToDisplay: string[] = ['orderNumber', 'date'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

  constructor(protected storeService: StoreService) {
    this.setOrdersToTable();
  }

  expandRow(expandedElement: Order | null, element: Order, e?: Event) {
    e?.stopPropagation();
    return expandedElement?.orderNumber === element.orderNumber ? null : element;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getColumnName(colName: string): string {
    return this.eColumnsNames[colName];
  }

  private setOrdersToTable() {
    this.storeService
      .getOrders()
      .pipe(takeUntilDestroyed())
      .subscribe(value => {
        this.dataControl = value;
        this.dataSource = new MatTableDataSource(value);
      });
  }
}
