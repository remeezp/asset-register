import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetFormComponent } from './asset-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AssetFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [AssetFormComponent],
  providers: [
    MatDatepickerModule,
  ],
})
export class AssetFormModule {}
