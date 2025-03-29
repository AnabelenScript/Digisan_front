import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectionPageComponent } from './conection-page.component';

describe('ConectionPageComponent', () => {
  let component: ConectionPageComponent;
  let fixture: ComponentFixture<ConectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConectionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
