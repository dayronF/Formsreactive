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
      console.log(this.form.value);
    } else {
      console.log(this.form.get('Email')!.getError('required'));
    }
  }

  hasError(controlName: string, errorCode: string) {
    const control = this.form.get(controlName)!;
    const hasErrorCode = control.hasError(errorCode);
    const dirty = control.dirty;
    const touched = control.touched;

    return hasErrorCode && dirty && touched;
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
