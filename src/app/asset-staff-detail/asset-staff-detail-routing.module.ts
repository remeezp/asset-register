import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetStaffDetailComponent } from './asset-staff-detail.component';

const routes: Routes = [{ path: '', component: AssetStaffDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetStaffDetailRoutingModule { }
