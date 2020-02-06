import {Component, Input, OnInit} from '@angular/core';
import {StoryEntry} from '../../Model/StoryEntry';
import {StoryEntryType} from '../../Model/StoryEntryType';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent implements OnInit {

  @Input()
  public Entries: StoryEntry[] = [];

  constructor() {
    this.Entries.push(new StoryEntry(StoryEntryType.SystemText, 'Welcome to Doggo Quest!'));
    this.Entries.push(new StoryEntry(StoryEntryType.SystemText, 'Doggo Quest is an Interactive Fiction game created by Matt Eland (@IntegerMan)'));
    this.Entries.push(new StoryEntry(StoryEntryType.SystemText, 'This game is implemented in Angular / TypeScript using Angular Material for styling.'));
    this.Entries.push(new StoryEntry(StoryEntryType.PlayerCommand, 'Say Hello World'));
    this.Entries.push(new StoryEntry(StoryEntryType.StoryNarrative, 'You cannot talk because - follow my logic here - YOU ARE A DOG!'));
    this.Entries.push(new StoryEntry(StoryEntryType.StoryNarrative, 'A small \'ruff\' emerges from your mouth in protest to this fact, however.'));
  }

  ngOnInit() {
  }

}
