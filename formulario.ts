import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from './cep.service';
import { cpfValidator } from './validators/cpf.validator';
import { dateOfBirthValidator } from './validators/date-of-birth.validator';
import { phoneValidator } from './validators/phone.validator';
import { cepValidator } from './validators/cep.validator';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './template.html',
  styleUrls: ['./formulario2.css']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private cepService: CepService) {
    this.userForm = this.fb.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      dataNascimento: ['', [Validators.required, dateOfBirthValidator]],
      cpf: ['', [Validators.required, cpfValidator]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, phoneValidator]],
      cep: ['', [Validators.required, cepValidator]],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }

  onCepBlur() {
    const cep = this.userForm.get('cep')?.value; // Usando operador de coalescência nula
    if (cep) {
      this.cepService.getCep(cep).subscribe((data: any) => {
        this.userForm.patchValue({
          rua: data.logradouro,
          complemento: data.complemento,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf
        });
      });
    }
  }
}
