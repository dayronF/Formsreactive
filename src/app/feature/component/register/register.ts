import { Component } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  form: FormGroup;
  registered = false;
  personalData: {
    name: string;
    Email: string;
    userName: string;
    age: number;
  } | null = null;

  showPassword = false;
  showPasswordValidation = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        Email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+/),
          ],
        ],
        passwordValidation: [null, [Validators.required]],
        Terms: [false, [Validators.requiredTrue]],
        age: [null, [Validators.required, Validators.min(15), Validators.max(90)]],
        name: [null, [Validators.required, Validators.minLength(3)]],
        userName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
      },
      { validators: passwordsCoincidenValidator },
    );
  }

  onClick() {
    if (this.form.valid) {
      this.personalData = {
        name: this.form.value.name,
        Email: this.form.value.Email,
        userName: this.form.value.userName,
        age: this.form.value.age,
      };
      this.registered = true;
      console.log(this.form.value);
    } else {
      console.log(this.form.get('Email')!.getError('required'));
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  togglePasswordValidation() {
    this.showPasswordValidation = !this.showPasswordValidation;
  }
}

export const passwordsCoincidenValidator: ValidatorFn = (
  group: AbstractControl,
): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirmar = group.get('passwordValidation')?.value;

  if (password && confirmar && password !== confirmar) {
    return { passwordsNoCoinciden: true };
  }
  return null;
};
