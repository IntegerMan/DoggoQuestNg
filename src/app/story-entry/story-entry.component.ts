import {Component, Input, OnInit} from '@angular/core';
import {StoryEntry} from '../../Model/StoryEntry';
import {StoryEntryType} from '../../Model/StoryEntryType';

@Component({
  selector: 'app-story-entry',
  templateUrl: './story-entry.component.html',
  styleUrls: ['./story-entry.component.scss']
})
export class StoryEntryComponent implements OnInit {

  @Input()
  public Entry: StoryEntry;

  public Entries = StoryEntryType;

  constructor() { }

  ngOnInit() {
  }

}
