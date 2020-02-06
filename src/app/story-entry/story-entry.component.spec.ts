import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryEntryComponent } from './story-entry.component';

describe('StoryEntryComponent', () => {
  let component: StoryEntryComponent;
  let fixture: ComponentFixture<StoryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
