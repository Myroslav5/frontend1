import { Routes } from '@angular/router';
import { ItemsListComponent } from './features/products/items-list/items-list.component';
import { ItemDetailsComponent } from './features/products/item-details/item-details.component';
import { ItemFormComponent } from './features/products/item-form/item-form.component';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  { path: 'items', component: ItemsListComponent },
  
  { 
    path: 'items/add', 
    component: ItemFormComponent, 
    canActivate: [authGuard]
  },
  
  { path: 'items/:id', component: ItemDetailsComponent }
];