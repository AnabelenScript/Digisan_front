import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectionFormComponent } from './conection-form.component';

describe('ConectionFormComponent', () => {
  let component: ConectionFormComponent;
  let fixture: ComponentFixture<ConectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConectionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
