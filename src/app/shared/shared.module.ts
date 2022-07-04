import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CastPipe } from './pipes/cast.pipe';
import { TypeofPipe } from './pipes/typeof.pipe';

@NgModule({
  declarations: [
    CastPipe,
    TypeofPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    CastPipe,
    TypeofPipe
  ]
})
export class SharedModule { }
