import { Routes } from '@angular/router';
import { ItemsListComponent } from './features/products/items-list/items-list.component';
import { ItemDetailsComponent } from './features/products/item-details/item-details.component';
import { ItemFormComponent } from './features/products/item-form/item-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  
  { path: 'items', component: ItemsListComponent },

  { path: 'items/add', component: ItemFormComponent }, 

  { path: 'items/:id', component: ItemDetailsComponent },
];