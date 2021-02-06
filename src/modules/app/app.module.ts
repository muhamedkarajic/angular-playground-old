import { InputComponent } from 'src/components/input/input.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/components/app-component/app.component';
import { RequiredPipe } from 'src/pipes/required-input.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HasRequiredFieldPipe } from 'src/pipes/has-required-field';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    RequiredPipe,
    HasRequiredFieldPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
