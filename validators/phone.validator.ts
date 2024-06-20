import { AbstractControl, ValidationErrors } from '@angular/forms';

export function phoneValidator(control: AbstractControl): ValidationErrors | null {
          const phone = control.value;
          const phonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;

          return phonePattern.test(phone) ? null : { invalidPhone: true };
}
