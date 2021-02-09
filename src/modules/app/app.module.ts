import { ReactiveInputComponent } from 'src/components/ractive-input/input.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/components/app-component/app.component';
import { RequiredPipe } from 'src/pipes/required-input.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HasRequiredFieldPipe } from 'src/pipes/has-required-field.pipe';
import { ReactiveButtonComponent } from 'src/components/reactive-button/reactive-button.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveInputComponent,
    ReactiveButtonComponent,
    RequiredPipe,
    HasRequiredFieldPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
