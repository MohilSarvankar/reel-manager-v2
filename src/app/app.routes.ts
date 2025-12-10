import { Routes } from '@angular/router';
import { ReelList } from './reel-list/reel-list';

export const routes: Routes = [
    {path:'', component: ReelList},
    {
        path: 'create', 
        loadComponent: () => import('./reel-form/reel-form').then(m => m.ReelForm)
    },
    {
        path: 'reel/:id', 
        loadComponent: () => import('./reel-form/reel-form').then(m => m.ReelForm)
    },
    {path: '**', redirectTo: ''}
];
