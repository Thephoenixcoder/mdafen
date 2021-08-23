import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealingFeaturesComponent } from './dealing-features.component';

describe('DealingFeaturesComponent', () => {
  let component: DealingFeaturesComponent;
  let fixture: ComponentFixture<DealingFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealingFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealingFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
