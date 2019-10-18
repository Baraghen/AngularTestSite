import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: 'user-form', component: UserFormComponent},
  {path: 'user-posts', component: UserPostsComponent},
  {path: 'tables', component: TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
