import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateOfBirthValidator(control: AbstractControl): ValidationErrors | null {
          const date = new Date(control.value);
          if (isNaN(date.getTime())) {
                    return { invalidDate: true };
          }

          const today = new Date();
          let age = today.getFullYear() - date.getFullYear();
          const m = today.getMonth() - date.getMonth();

          if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {age--;
          }

          return age >= 18 ? null : { underage: true };
}
