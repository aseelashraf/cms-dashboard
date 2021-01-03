import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDealComponent } from './view-deal.component';

describe('ViewdealComponent', () => {
  let component: ViewDealComponent;
  let fixture: ComponentFixture<ViewDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});