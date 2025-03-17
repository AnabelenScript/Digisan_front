import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidsoapPageComponent } from './liquidsoap-page.component';

describe('LiquidsoapPageComponent', () => {
  let component: LiquidsoapPageComponent;
  let fixture: ComponentFixture<LiquidsoapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidsoapPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidsoapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
