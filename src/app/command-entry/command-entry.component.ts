import {Component} from '@angular/core';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-command-entry',
  templateUrl: './command-entry.component.html',
  styleUrls: ['./command-entry.component.scss']
})
export class CommandEntryComponent {
  public Command: string;

  constructor(private  storyService: StoryService) { }

  public submitCommand(): void {
    // Send the event on to the service for processing
    this.storyService.handlePlayerInput(this.Command);

    // Clear the input's text for next time
    this.Command = '';
  }
}
