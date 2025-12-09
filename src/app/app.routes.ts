import { Routes } from '@angular/router';
import { ReelList } from './reel-list/reel-list';
import { ReelForm } from './reel-form/reel-form';

export const routes: Routes = [
    {path:'', component: ReelList},
    {path: 'create', component: ReelForm},
    {path: 'reel/:id', component: ReelForm},
    {path: '**', redirectTo: ''}
];
