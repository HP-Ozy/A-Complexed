import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule} from '@angular/material/core';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule,
    
  ],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent  {

  myForm: FormGroup;
formData: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
      this.myForm = this.fb.group({
          // Define your form controls here
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          age:  ['', Validators.required],
          // Add more fields as needed
      });
  }

  private apiUrl = 'mongodb://0.0.0.0:27017/A-X'; // Sostituisci con l'URL del tuo server

  

  onSubmit() {
    if (this.myForm.valid) {
      const formData = {
        firstName: this.myForm.get('firstName')?.value,
        lastName: this.myForm.get('lastName')?.value,
        age: this.myForm.get('age')?.value,
      };
  
      this.http.post(this.apiUrl, formData)
        .subscribe(response => {
          console.log('Dati inviati con successo al server:', response);
          // Puoi gestire la risposta del server qui se necessario
        });
    }
}





















}
