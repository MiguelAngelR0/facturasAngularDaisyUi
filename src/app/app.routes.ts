import { Routes } from '@angular/router';
import { Landing } from './layout/pages/landing/landing';

export const routes: Routes = [
  {
    path: '',
    component: Landing
  },
  {
    path: '**',
    redirectTo: ''
  }

];
