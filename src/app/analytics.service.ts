import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly win: any;

  constructor() {
    this.win = window;
    this.win.ga('create', 'UA-108393235-4', 'auto');
  }

  public logPlayerText(text: string, roomName: string, isValid: boolean): void {
    this.win.ga('send', 'event', 'Player Input', `${roomName}: ${text}`, roomName, isValid, {});
  }
}
