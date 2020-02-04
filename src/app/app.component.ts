import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
    this.onResize();
  }

  @ViewChild('scrollMe', { read: ViewContainerRef, static: true }) scrollContainer;

  public StoryCardHeight: number;

  public onResize(): void {
    this.StoryCardHeight = window.innerHeight - 200;
  }

  public ngOnInit(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }
}
