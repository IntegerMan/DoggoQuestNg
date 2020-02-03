import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTextComponent } from './story-text.component';

describe('StoryTextComponent', () => {
  let component: StoryTextComponent;
  let fixture: ComponentFixture<StoryTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
