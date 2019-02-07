import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive form module
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormvalidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
