import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryareaComponent } from './entryarea.component';

describe('EntryareaComponent', () => {
  let component: EntryareaComponent;
  let fixture: ComponentFixture<EntryareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
