import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoFormComponent } from './form/contacto-form/contacto-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ContactoFormComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ContactoFormComponent]
})
export class ContactoModule { }
