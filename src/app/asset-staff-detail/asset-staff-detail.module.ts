import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetStaffDetailRoutingModule } from './asset-staff-detail-routing.module';
import { AssetStaffDetailComponent } from './asset-staff-detail.component';
import { AssetFormModule } from '../shared/asset-form/asset-form.module';


@NgModule({
  declarations: [AssetStaffDetailComponent],
  imports: [
    CommonModule,
    AssetStaffDetailRoutingModule,
    AssetFormModule
  ]
})
export class AssetStaffDetailModule { }
