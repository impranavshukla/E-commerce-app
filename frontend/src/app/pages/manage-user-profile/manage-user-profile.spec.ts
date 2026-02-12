import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserProfile } from './manage-user-profile';

describe('ManageUserProfile', () => {
  let component: ManageUserProfile;
  let fixture: ComponentFixture<ManageUserProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUserProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUserProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
