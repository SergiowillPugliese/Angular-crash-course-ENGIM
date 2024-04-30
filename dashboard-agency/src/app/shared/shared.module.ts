import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScrollerModule } from 'primeng/scroller';


const primeNgModule = [
  ButtonModule,
  CardModule,
  ScrollerModule
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
