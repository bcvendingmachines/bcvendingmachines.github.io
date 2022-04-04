import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbTesterComponent } from './db-tester/db-tester.component';
const routes: Routes = [
  { path: 'test', component: DbTesterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DbTesterComponent];
