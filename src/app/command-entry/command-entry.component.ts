import {Component, OnInit} from '@angular/core';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-command-entry',
  templateUrl: './command-entry.component.html',
  styleUrls: ['./command-entry.component.scss']
})
export class CommandEntryComponent implements OnInit {
  public Command: string;

  constructor(private  storyService: StoryService) { }

  ngOnInit() {
  }

  submitCommand() {
    this.storyService.handlePlayerInput(this.Command);

    // Clear the input's text for next time
    this.Command = '';
  }
}
