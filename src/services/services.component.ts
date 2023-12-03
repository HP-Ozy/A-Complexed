import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  private apiUrl = 'http://localhost:4200'; // Sostituisci con l'URL del tuo backend

  constructor(private http: HttpClient) {}

  // Funzione per inviare dati al backend per l'operazione di creazione
  createData(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, formData);}
}
