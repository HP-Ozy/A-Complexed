import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PersonsComponent } from "../persons/persons.component";
import { EventsComponent } from '../events/events.component';
import { Router } from '@angular/router';
import { DbComponent } from '../db/db.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatSlideToggleModule,
        PersonsComponent,
        EventsComponent,
        DbComponent
    ]
})






export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {}

  callPersons(): void {
    this.router.navigate(['/persons']);
  }
  
  callEvents(): void {
    this.router.navigate(['/events']); 
  }
  callPrograms(): void {
    this.router.navigate(['/programs']); 
  }
  callDB(): void {
    this.router.navigate(['/db']); 
  }

}


