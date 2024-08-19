import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [MatButtonModule, MatIconModule],
})
export class SharedModule {}
