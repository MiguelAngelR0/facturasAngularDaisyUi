import { Routes } from '@angular/router';
import { Landing } from './layout/pages/landing/landing';
import { Precios } from './layout/pages/precios/precios';
import { Layout } from './layout/pages/layout/layout';


export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./layout/pages/landing/landing').then(m => m.Landing)
      },
      {
        path: 'precios',
        loadComponent: () =>
          import('./layout/pages/precios/precios').then(m => m.Precios)
      },
      {
        path: 'precios/:tab',
        loadComponent: () =>
          import('./layout/pages/precios/precios').then(m => m.Precios)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
