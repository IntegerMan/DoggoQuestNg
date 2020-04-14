import {Component, Input, OnInit} from '@angular/core';
import { StoryEntry } from 'doggo-quest-logic/dist/StoryEntry';
import { StoryEntryType } from 'doggo-quest-logic/dist/StoryEntryType';

@Component({
  selector: 'app-story-entry',
  templateUrl: './story-entry.component.html',
  styleUrls: ['./story-entry.component.scss']
})
export class StoryEntryComponent implements OnInit {

  @Input()
  public Entry: StoryEntry;

  // Alias the enum so we can refer to its values in the component
  public Entries = StoryEntryType;

  constructor() { }

  ngOnInit() {
  }

}
