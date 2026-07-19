import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  form: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onClick() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log(this.form.get('Email')!.getError('required'));
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
