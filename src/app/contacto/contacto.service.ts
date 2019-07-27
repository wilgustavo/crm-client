import { Contacto } from './contacto.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private url = 'http://localhost:8080/contactos';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer 96ec1106-219c-4f25-a12a-07a4f79940b0'
    })
  };

  constructor(private http: HttpClient) { }

  crear(contacto: Contacto) {
    return this.http.post(this.url, contacto, this.httpOptions);
  }

}
