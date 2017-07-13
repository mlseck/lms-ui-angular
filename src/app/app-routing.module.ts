import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/index';
import {BookListComponent, AdministratorComponent} from './administrator/index';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
        path: 'books',
        component: BookListComponent,
        /*children: [
            { path: 'add', component: BookAddEditComponent },
            { path: 'edit/:id', component: BookAddEditComponent }
        ]*/
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, BookListComponent, AdministratorComponent];
