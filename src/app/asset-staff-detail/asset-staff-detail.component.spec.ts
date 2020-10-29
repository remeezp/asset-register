import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetStaffDetailComponent } from './asset-staff-detail.component';

describe('AssetStaffDetailComponent', () => {
  let component: AssetStaffDetailComponent;
  let fixture: ComponentFixture<AssetStaffDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetStaffDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetStaffDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
