import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ControlContainer, FormArray, FormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  @Input() idx = 0;

  form!: UntypedFormGroup;

  constructor(
    private controlContainer: ControlContainer,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.controlContainer.control as UntypedFormGroup;
  }

  get formProductsArray(): FormArray {
    return this.form.get('products') as FormArray;
  }

  getFormControlName(control: string): FormControl {
    return this.formProductsArray.controls[this.idx].get(control) as FormControl;
  }

  removeProduct() {
    this.formProductsArray.removeAt(this.idx);
  }
}
