import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './component/login/login';
import { Register } from './component/register/register';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Login, Register],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [Login, Register],
})
export class FeatureModule {}
