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
export class PersonsComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
      this.myForm = this.fb.group({
          // Define your form controls here
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          // Add more fields as needed
      });

  
  }
  onSubmit() {
    if (this.myForm.valid) {
        // Form is valid, handle form submission
        const formData = this.myForm.value;
        // Send data to RESTful API or perform other actions
    }
}



  @Output() callPersonsEvent = new EventEmitter<void>();

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

 
}






















