import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMpComponent } from './form-mp.component';

describe('FormMpComponent', () => {
  let component: FormMpComponent;
  let fixture: ComponentFixture<FormMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormMpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
