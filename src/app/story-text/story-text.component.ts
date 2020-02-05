import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-text',
  templateUrl: './story-text.component.html',
  styleUrls: ['./story-text.component.scss']
})
export class StoryTextComponent implements OnInit {

  @Input()
  public Text: string;

  constructor() { }

  ngOnInit() {
  }

}
