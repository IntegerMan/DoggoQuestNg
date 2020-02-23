import nlp from 'compromise';
import {GameObject} from '../World/GameObject';

export class Word {
  readonly tags: Record<string, boolean>;

  public parent: Word;
  public children: Word[] = [];

  /**
   * The object in the game this world has been mapped to
   */
  public target: GameObject | undefined;

  constructor(term: nlp.Term) {
    this.text = term.text;
    this.reduced = term.reduced;
    this.tags = term.tags;
  }

  public get tagNames(): string[] {
    const names: string[] = [];
    // tslint:disable-next-line:forin
    for (const tag in this.tags) {
      if (this.tags.hasOwnProperty(tag)) {
        names.push(tag);
      }
    }
    return names;
  }

  public get hasChildren(): boolean {
    return this.children.length > 0;
  }


  /**
   * The raw text the user typed in
   */
  public text: string;

  /**
   * The normalized text for text comparison / matching
   */
  public reduced: string;

  public get isNoun(): boolean {
    return this.hasTag('Noun');
  }

  public get isVerb(): boolean {
    return this.hasTag('Verb');
  }

  public get isAdverb(): boolean {
    return this.hasTag('Adverb');
  }

  public get isAdjective(): boolean {
    return this.hasTag('Adjective');
  }

  public hasTag(tagName: string): boolean {
    // tslint:disable-next-line:no-string-literal
    return this.tags[tagName];
  }

  public addTag(tagName: string): Word {
    this.tags[tagName] = true;
    return this;
  }

  public removeTag(tagName: string): Word {
    delete this.tags[tagName];
    return this;
  }

  public addChild(word: Word): Word {
    this.children.push(word);
    return this;
  }

}
