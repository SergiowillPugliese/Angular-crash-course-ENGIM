import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


const primeNgModule = [
  ButtonModule,
  CardModule
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
