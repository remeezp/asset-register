import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.scss']
})
export class AssetFormComponent implements OnInit {

  assetTypes = ['DELL LATITUDE E7401 4G Notebook'];
  assetForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.assetForm = this.fb.group({
      assetId: new FormControl(''),
      assetNumber: new FormControl('', [Validators.required]),
      purchaseDate: [(new Date()).toISOString(), Validators.required],
      assetType: [this.assetTypes, Validators.required]
    });
  }

  onSubmit(form: any) {
    console.log(form);
  }

}
