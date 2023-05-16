import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'locations',
    loadChildren: () => import('./views/locations/locations.module').then(m => m.LocationsModule),
  },
  {
    path: '',
    redirectTo: 'locations',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
