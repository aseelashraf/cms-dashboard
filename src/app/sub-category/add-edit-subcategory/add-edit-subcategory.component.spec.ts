import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubCategoryComponent } from './add-edit-subcategory.component';

describe('AddsubcategoryComponent', () => {
  let component: AddEditSubCategoryComponent;
  let fixture: ComponentFixture<AddEditSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditSubCategoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
