import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidsoapFormComponent } from './liquidsoap-form.component';

describe('LiquidsoapFormComponent', () => {
  let component: LiquidsoapFormComponent;
  let fixture: ComponentFixture<LiquidsoapFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidsoapFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidsoapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
