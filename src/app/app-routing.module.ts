import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { InfoComponent } from './info/info.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component:IndexComponent},
  { path: 'registro', component:RegistroComponent},
  { path: 'info', component:InfoComponent},
  { path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
