import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-entry',
  templateUrl: './command-entry.component.html',
  styleUrls: ['./command-entry.component.scss']
})
export class CommandEntryComponent implements OnInit {
  public Command: string;

  constructor() { }

  ngOnInit() {
  }

  submitCommand() {
    // TODO: Further in this series this will call to something else instead of logging to console
    if (console && console.log) {
      console.log(`Command entered: ${this.Command}`);
    }

    // Clear the input's text for next time
    this.Command = '';
  }
}
