import {Injectable} from '@angular/core';
import {Sentence} from '../Model/Sentence';
import {StoryEntry} from '../Model/StoryEntry';
import {StoryEntryType} from '../Model/StoryEntryType';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  constructor() { }

  public handleEat(sentence: Sentence, entries: StoryEntry[]): void {
    entries.push(new StoryEntry(StoryEntryType.CommandError, 'You can\'t eat anything yet.'));
  }

  public getHandler(verb: string): (sentence: Sentence, entries: StoryEntry[]) => void | undefined {
    if (verb === 'eat') {
      return this.handleEat;
    }

    return undefined;
  }
}
