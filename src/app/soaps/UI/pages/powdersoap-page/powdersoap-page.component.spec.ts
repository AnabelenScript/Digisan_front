import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowdersoapPageComponent } from './powdersoap-page.component';

describe('PowdersoapPageComponent', () => {
  let component: PowdersoapPageComponent;
  let fixture: ComponentFixture<PowdersoapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowdersoapPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowdersoapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
