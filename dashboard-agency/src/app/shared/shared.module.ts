import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

const primeNgModule = [
  ButtonModule
]

@NgModule({
  imports: [
    CommonModule,
    ...primeNgModule
  ],
  exports: [
    ...primeNgModule
  ]
})
export class SharedModule { }
