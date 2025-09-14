import { Routes } from '@angular/router';
import { Landing } from './layout/pages/landing/landing';
import { Precios } from './layout/pages/precios/precios';
import { Layout } from './layout/pages/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Landing },
      { path: 'precios', component: Precios },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
