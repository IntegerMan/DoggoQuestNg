import nlp from 'compromise';

export class Word {
  private readonly tags: Record<string, boolean>;

  /**
   * The raw text the user typed in
   */
  public text: string;

  /**
   * The normalized text for text comparison / matching
   */
  public reduced: string;

  public get isVerb(): boolean {
    return this.hasTag('Verb');
  }

  constructor(term: nlp.Term) {
    this.text = term.text;
    this.reduced = term.reduced;
    this.tags = term.tags;
  }

  public hasTag(tagName: string): boolean {
    // tslint:disable-next-line:no-string-literal
    return this.tags[tagName];
  }
}
