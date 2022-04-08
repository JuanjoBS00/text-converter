import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsareaComponent } from './actionsarea.component';

describe('ActionsareaComponent', () => {
  let component: ActionsareaComponent;
  let fixture: ComponentFixture<ActionsareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
