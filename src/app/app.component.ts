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

  public ContentHeight: number;

  public onResize(): void {
    this.ContentHeight = window.innerHeight - 180;
  }

  public ngOnInit(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    if (this.scrollContainer && this.scrollContainer.nativeElement) {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }
  }
}
