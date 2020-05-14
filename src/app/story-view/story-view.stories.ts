import { moduleMetadata, storiesOf } from "@storybook/angular";
import { AppModule } from "../app.module";
import { StoryViewComponent } from "./story-view.component";
import { withA11y } from "@storybook/addon-a11y";
import { StoryEntry } from "doggo-quest-logic/dist/StoryEntry";
import { StoryEntryType } from "doggo-quest-logic/dist/StoryEntryType";

storiesOf("StoryView", module)
  .addDecorator(moduleMetadata({ imports: [AppModule] }))
  .addDecorator(withA11y)
  .add("SampleText", () => ({
    component: StoryViewComponent,
    props: {
      Entries: [
        new StoryEntry(
          StoryEntryType.SystemText,
          "This is a story view storyboard test"
        ),
        new StoryEntry(StoryEntryType.PlayerCommand, "Look around"),
        new StoryEntry(
          StoryEntryType.StoryNarrative,
          "You can't see anything - it's a storyboard!"
        )
      ]
    }
  }));
