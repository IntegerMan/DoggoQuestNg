import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor() { }

  public handlePlayerInput(text: string): void {
    // Log it if the console is available (won't be in all browsers)
    if (console && console.log) {
      console.log(`Command entered: ${text}`);
    }

    // TODO: Emit the event
  }
}
