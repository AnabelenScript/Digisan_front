import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapsTableComponent } from './soaps-table.component';

describe('SoapsTableComponent', () => {
  let component: SoapsTableComponent;
  let fixture: ComponentFixture<SoapsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoapsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoapsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
