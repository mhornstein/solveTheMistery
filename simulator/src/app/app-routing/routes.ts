import { Routes } from '@angular/router';
import { MainSimulatorComponent } from '../main-simulator/main-simulator.component';

export const routes: Routes = [
  { path: 'simulator',  component: MainSimulatorComponent },
  { path: '', redirectTo: '/simulator', pathMatch: 'full' }
];
