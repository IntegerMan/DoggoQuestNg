import {EventEmitter, Injectable} from '@angular/core';
import {AnalyticsService} from './analytics.service';
import {StoryEntry} from 'doggo-quest-logic/dist/StoryEntry';
import {StoryEngine} from 'doggo-quest-logic/dist/StoryEngine';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private readonly engine: StoryEngine;
  public EntriesAdded: EventEmitter<StoryEntry[]> = new EventEmitter<StoryEntry[]>();

  public get initialEntries(): StoryEntry[] {
    return this.engine.getInitialEntries();
  }

  constructor(private analytics: AnalyticsService) {
    this.engine = new StoryEngine();
  }

  public get score(): number {
    return this.engine.score;
  }

  handlePlayerInput(command: string): StoryEntry[] {
    const originRoomName = this.engine.state.getRoom(this.engine.state.currentRoom).displayName;

    const response = this.engine.getResponseState(command);
    const entries = response.responses;

    this.EntriesAdded.emit(entries);
    this.analytics.logPlayerText(command, originRoomName, true, response.state);

    return entries;
  }
}
