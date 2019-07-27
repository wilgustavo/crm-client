import { Contacto } from './../../contacto.model';
import { ContactoService } from './../../contacto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {

  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
  }

  guardarContacto() {
    const contacto = new Contacto();
    contacto.apellido = 'Cosme';
    contacto.nombre = 'Fulanito';
    contacto.email = 'prueba@email.com';
    this.contactoService.crear(contacto).subscribe(console.log);

  }

}
