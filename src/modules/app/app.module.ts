import { ReactiveInputComponent } from 'src/components/ractive-input/input.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/components/app-component/app.component';
import { RequiredPipe } from 'src/pipes/required-input.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveButtonComponent } from 'src/components/reactive-button/reactive-button.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { AutoCompleteInputComponent } from 'src/autocomplete-input/autocomplete-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveInputComponent,
    ReactiveButtonComponent,
    RequiredPipe,
    AutoCompleteInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,

    //material
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
