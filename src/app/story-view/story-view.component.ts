import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoggingService} from '../logging.service';
import {StoryService} from '../story.service';
import { StoryEntry } from 'doggo-quest-logic/dist/StoryEntry';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss']
})
export class StoryViewComponent implements OnInit, OnDestroy {

  @Input()
  public Entries: StoryEntry[] = [];

  private entrySub: Subscription;

  constructor(private storyService: StoryService,
              private liveAnnouncer: LiveAnnouncer,
              private logger: LoggingService) {
    const initialEntries = storyService.initialEntries;

    for (const entry of initialEntries) {
      this.Entries.push(entry);
    }
  }

  ngOnInit() {
    this.entrySub = this.storyService.EntriesAdded.subscribe(entries => this.onEntryAdded(entries));
  }

  ngOnDestroy() {
    if (this.entrySub) {
      this.entrySub.unsubscribe();
      this.entrySub = null;
    }
  }

  private onEntryAdded(entries: StoryEntry[]) {
    this.logger.log('Entries added', entries);

    // Add the entries to the UI and build a single string to send to the live announcer
    let message = '';
    for (const entry of entries) {
      this.Entries.push(entry);
      message += entry.Text + '\r\n';
    }

    // NOTE: This will not notify of rapid-fire entries
    this.liveAnnouncer.announce(message).then(_ => this.logger.log(`\'${message}\' announced`));
  }
}
