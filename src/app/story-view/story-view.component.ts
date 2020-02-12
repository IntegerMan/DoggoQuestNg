import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {StoryEntry} from '../../Model/StoryEntry';
import {StoryEntryType} from '../../Model/StoryEntryType';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent implements OnInit, OnDestroy {

  @Input()
  public Entries: StoryEntry[] = [];

  private entrySub: Subscription;

  constructor(private storyService: StoryService) {
    this.Entries.push(new StoryEntry(StoryEntryType.SystemText, 'Welcome to Doggo Quest!'));
    this.Entries.push(new StoryEntry(StoryEntryType.SystemText,
      'Doggo Quest is an Interactive Fiction game created by Matt Eland (@IntegerMan)'));
    this.Entries.push(new StoryEntry(StoryEntryType.SystemText,
      'This game is implemented in Angular / TypeScript using Angular Material for styling.'));
    this.Entries.push(new StoryEntry(StoryEntryType.PlayerCommand, 'Say Hello World'));
    this.Entries.push(new StoryEntry(StoryEntryType.StoryNarrative,
      'You cannot talk because - follow my logic here - YOU ARE A DOG!'));
    this.Entries.push(new StoryEntry(StoryEntryType.StoryNarrative,
      'A small \'ruff\' emerges from your mouth in protest to this fact, however.'));
  }

  ngOnInit() {
    this.entrySub = this.storyService.EntryAdded.subscribe(entry => this.Entries.push(entry));
  }

  ngOnDestroy() {
    if (this.entrySub) {
      this.entrySub.unsubscribe();
      this.entrySub = null;
    }
  }

}
