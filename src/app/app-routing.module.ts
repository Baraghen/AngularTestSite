import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: 'user-form', component: UserFormComponent},
  {path: 'user-posts', component: UserPostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
