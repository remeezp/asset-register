import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./search-result/search-result.module').then(
        (m) => m.SearchResultModule
      ),
  },
  {
    path: 'asset-staff-detail',
    loadChildren: () =>
      import('./asset-staff-detail/asset-staff-detail.module').then(
        (m) => m.AssetStaffDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
