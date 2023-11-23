import { Routes } from '@angular/router';
import { PersonsComponent } from '../persons/persons.component';
import { ServicesComponent } from '../services/services.component';
import { AppComponent } from './app.component';
import { EventsComponent } from '../events/events.component';
export const routes: Routes = [
{path: 'app', component: AppComponent},
{path: 'persons', component: PersonsComponent},
{path: 'events', component: EventsComponent}

];




