import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {StoryService} from '../story.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input()
  public Score = 0;
  private scoreSub: Subscription;

  constructor(private storyService: StoryService) {
    this.Score = storyService.score;
  }

  ngOnInit() {
    this.scoreSub = this.storyService.EntriesAdded.subscribe(_ => this.Score = this.storyService.score);
  }

  ngOnDestroy(): void {
    if (this.scoreSub) {
      this.scoreSub.unsubscribe();
    }
  }

}
