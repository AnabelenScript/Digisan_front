import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapsPageComponent } from './soaps-page.component';

describe('SoapsPageComponent', () => {
  let component: SoapsPageComponent;
  let fixture: ComponentFixture<SoapsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoapsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoapsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
