import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeareaComponent } from './outcomearea.component';

describe('OutcomeareaComponent', () => {
  let component: OutcomeareaComponent;
  let fixture: ComponentFixture<OutcomeareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutcomeareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
