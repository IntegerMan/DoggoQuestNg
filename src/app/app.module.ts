import {FormsModule} from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { StoryEntryComponent } from './story-entry/story-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoryViewComponent,
    FooterComponent,
    PlayerCommandComponent,
    CommandEntryComponent,
    GameOverComponent,
    StoryTextComponent,
    StoryEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
