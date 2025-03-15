import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowdersoapFormComponent } from './powdersoap-form.component';

describe('PowdersoapFormComponent', () => {
  let component: PowdersoapFormComponent;
  let fixture: ComponentFixture<PowdersoapFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowdersoapFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowdersoapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
