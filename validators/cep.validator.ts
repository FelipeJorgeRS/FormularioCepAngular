import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cepValidator(control: AbstractControl): ValidationErrors | null {
          const cep = control.value;
          const cepPattern = /^\d{5}-\d{3}$/;

          return cepPattern.test(cep) ? null : { invalidCep: true };
}
