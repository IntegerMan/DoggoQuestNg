import {Word} from './Word';

export class Sentence {
  private words: Word[] = [];

  constructor() {
  }

  public get verb(): string {
    if (this.words.length <= 0 || !this.words[0].isVerb) {
      return undefined;
    }

    return this.words[0].reduced;
  }

  addWord(word: Word) {
    this.words.push(word);
  }

  validate(): string | undefined {
    if (this.words.length <= 0) {
      return 'I\'m sorry, did you want to do something?';
    }

    if (!this.words[0].isVerb) {
      return 'Your command must start with a verb. For example: \'Bark at the squirrel\'';
    }

    return undefined;
  }
}
