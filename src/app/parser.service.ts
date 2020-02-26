import { Injectable } from '@angular/core';
import {Sentence} from '../Model/Parsing/Sentence';
import {Word} from '../Model/Parsing/Word';
import {LoggingService} from './logging.service';
import nlp from 'compromise';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor(private logger: LoggingService) { }

  public parse(text: string): Sentence {
    this.logger.log(`Player Command: ${text}`);

    // Have Compromise NLP Parse the sentence
    const terms = nlp(text).termList();
    this.logger.log(`Parsed terms for ${text}`, terms);

    // Construct the sentence
    const sentence = this.buildSentence(terms);
    sentence.text = text;

    // Log and return
    this.logger.log(`Constructed sentence`, sentence);
    return sentence;
  }

  private buildSentence(terms: nlp.Term[]): Sentence {
    const sentence = new Sentence();

    // Translate from NLP Terms to domain object Words
    // This serves as a layer of abstraction between Compromise and the rest of the code
    let word: Word;
    for (const term of terms) {
      const tags: string[] = [];
      for (const tag in term.tags) {
        if (term.tags.hasOwnProperty(tag)) {
          tags.push(tag);
        }
      }
      word = new Word(term.text, term.reduced, tags);

      this.adjustTags(word);

      sentence.addWord(word);
    }

    if (sentence.words.length > 0 && !sentence.verbWord && sentence.words[0].hasTag('Direction')) {
      sentence.assumeVerb('go');
    }

    // Now that we have our words, let's start linking them together
    this.linkSentence(sentence);

    return sentence;
  }

  private linkSentence(sentence: Sentence) {
    const verb: Word = sentence.verbWord;
    let lastNoun: Word = null;

    const reversedSentence = sentence.words.slice().reverse();
    for (const word of reversedSentence) {
      if (word.isNoun) {
        lastNoun = word;
        continue;
      }

      if (word.isVerb) {
        continue;
      }

      if (word.isAdverb) {
        word.parent = verb;
        if (verb) {
          verb.addChild(word);
        }
      } else {
        word.parent = lastNoun;
        if (lastNoun) {
          lastNoun.addChild(word);
        }
      }
    }
  }

  private adjustTags(word: Word): void {

    const verbs = ['bark', 'roo', 'arf', 'yip', 'open', 'growl', 'howl'];
    const nouns = ['crate'];
    const preps = ['on', 'under', 'below', 'behind', 'above'];
    const directions = ['north', 'south', 'east', 'west'];

    if (verbs.find(v => v === word.reduced)) {
      word.removeTag('Noun').addTag('Verb');
    } else if (nouns.find(v => v === word.reduced)) {
      word.removeTag('Verb').addTag('Noun');
    } else if (preps.find(p => p === word.reduced)) {
      word.addTag('Preposition');
    } else if (directions.find(d => d === word.reduced)) {
      word.addTag('Noun').addTag('Direction');
    }

    // Possessive nouns should be treated as adjectives
    if (word.isNoun && word.hasTag('Possessive')) {
      word.removeTag('Noun');
    }
  }
}
