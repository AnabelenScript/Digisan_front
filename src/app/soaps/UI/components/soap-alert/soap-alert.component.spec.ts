import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapAlertComponent } from './soap-alert.component';

describe('SoapAlertComponent', () => {
  let component: SoapAlertComponent;
  let fixture: ComponentFixture<SoapAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoapAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoapAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
