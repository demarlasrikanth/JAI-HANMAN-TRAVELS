import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokkingComponent } from './bokking.component';

describe('BokkingComponent', () => {
  let component: BokkingComponent;
  let fixture: ComponentFixture<BokkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BokkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
