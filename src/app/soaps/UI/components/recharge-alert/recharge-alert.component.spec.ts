import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeAlertComponent } from './recharge-alert.component';

describe('RechargeAlertComponent', () => {
  let component: RechargeAlertComponent;
  let fixture: ComponentFixture<RechargeAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechargeAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
