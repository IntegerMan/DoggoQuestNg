import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoryViewComponent } from './story-view/story-view.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerCommandComponent } from './player-command/player-command.component';
import { CommandEntryComponent } from './command-entry/command-entry.component';
import { GameOverComponent } from './game-over/game-over.component';
import { StoryTextComponent } from './story-text/story-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoryViewComponent,
    FooterComponent,
    PlayerCommandComponent,
    CommandEntryComponent,
    GameOverComponent,
    StoryTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
