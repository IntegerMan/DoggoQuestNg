import { Injectable } from '@angular/core';
import {GameWorld} from '../Model/World/GameWorld';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly win: any;

  constructor() {
    this.win = window;
    if (this.win) {
      this.win.ga('create', 'UA-108393235-4', 'auto');
    }
  }

  public logPlayerText(text: string, roomName: string, isValid: boolean, world: GameWorld): void {
    let eventName = 'Player Input';
    if (!isValid) {
      eventName = 'Invalid Input';
    }
    if (this.win) {
      this.win.ga('send', 'event', eventName, `${roomName}: ${text}`, roomName, isValid, world);
    }
  }
}
