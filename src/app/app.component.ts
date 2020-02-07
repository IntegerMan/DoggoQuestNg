import {
  AfterContentChecked,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {Subscription} from 'rxjs';
import {StoryService} from './story.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterContentChecked {
  private entrySub: Subscription;
  private scrollCount = 0;

  constructor(private storyService: StoryService) {
    this.onResize();
  }

  @ViewChild('scrollMe', { static: false }) scrollContainer;
  @ViewChild('bottomOfScroll', { static: false }) scrollBottom;

  public ContentHeight: number;

  public onResize(): void {
    this.ContentHeight = window.innerHeight - 180;
  }

  public ngOnInit(): void {
    this.scrollToBottom();
    this.entrySub = this.storyService.ReadyForInput.subscribe(_ => this.scrollCount = 2);
  }

  ngOnDestroy() {
    if (this.entrySub) {
      this.entrySub.unsubscribe();
      this.entrySub = null;
    }
  }

  scrollToBottom(): void {
    if (this.scrollContainer && this.scrollContainer.nativeElement) {
      this.scrollBottom.nativeElement.scrollIntoView({behavior: 'smooth' });
    }
  }

  ngAfterContentChecked(): void {
    if (this.scrollCount > 0) {
      this.scrollCount--;
      this.scrollToBottom();
    }
  }
}
