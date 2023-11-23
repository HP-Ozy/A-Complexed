import { Routes } from '@angular/router';
import { PersonsComponent } from '../persons/persons.component';
import { AppComponent } from './app.component';
import { EventsComponent } from '../events/events.component';
import { ProgramsComponent } from '../programs/programs.component';
import { DbComponent } from '../db/db.component';
export const routes: Routes = [
{path: 'app', component: AppComponent},
{path: 'persons', component: PersonsComponent},
{path: 'events', component: EventsComponent},
{path: 'programs', component: ProgramsComponent},
{path: 'db', component: DbComponent}

];




