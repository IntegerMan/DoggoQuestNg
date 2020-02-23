import {Word} from './Word';

export class Sentence {
  public text: string;

  constructor() {  }

  public get verbWord(): Word {
    if (this.words.length <= 0 || !this.words[0].isVerb) {
      return undefined;
    }

    return this.words[0];
  }

  public get verb(): string {
    const word = this.verbWord;

    if (word) {
      return word.reduced;
    }

    return undefined;
  }

  public get target(): string | undefined {
    if (this.words.length > 1) {
      for (const word of this.words) {
        if (word.isNoun) {
          return word.reduced;
        }
      }
    }

    return undefined;
  }

  public words: Word[] = [];

  public get rootWords(): Word[] {
    const roots: Word[] = [];

    for (const word of this.words) {
      if (!word.parent) {
        roots.push(word);
      }
    }

    return roots;
  }

  addWord(word: Word) {
    this.words.push(word);
  }

  public validate(): string | undefined {
    if (this.words.length <= 0) {
      return 'I\'m sorry, did you want to do something?';
    }

    if (!this.words[0].isVerb) {
      return 'Your command must start with a verb. For example: \'Bark at the squirrel\'';
    }

    if (this.words.filter(w => w.isVerb).length > 1) {
      return 'Your command cannot have more than one verb';
    }

    return undefined;
  }
}
