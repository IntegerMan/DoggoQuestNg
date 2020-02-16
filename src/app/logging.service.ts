import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  public log(message: any, ...optionalParams: any[]): void {
    // Log it if the console is available (won't be in all browsers)
    if (console && console.log) {
      console.log(message, optionalParams);
    }
  }
}
