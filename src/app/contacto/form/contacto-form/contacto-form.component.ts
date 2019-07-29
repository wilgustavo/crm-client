import { Contacto } from './../../contacto.model';
import { ContactoService } from './../../contacto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {

  contactoForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    email: ['']
  });

  constructor(private contactoService: ContactoService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  guardarContacto() {
    this.contactoService.crear(this.contactoForm.value).subscribe(console.log);
  }

}
