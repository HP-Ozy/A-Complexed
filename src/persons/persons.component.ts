
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule} from '@angular/material/core';
import { Component, Output, EventEmitter } from '@angular/core';



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
    MatNativeDateModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent {

  
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


