import { Injectable } from '@angular/core';
import {Sentence} from '../Model/Sentence';
import {Word} from '../Model/Word';
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
      word = new Word(term);

      this.adjustTags(word);

      sentence.addWord(word);
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
    switch (word.reduced) {
      case 'open':
        word.addTag('Verb');
        break;
      case 'crate':
        word.removeTag('Verb').addTag('Noun');
        break;
      case 'on':
      case 'under':
      case 'below':
      case 'behind':
      case 'above':
        word.addTag('Preposition');
        break;
    }

    // Possessive nouns should be treated as adjectives
    if (word.isNoun && word.hasTag('Possessive')) {
      word.removeTag('Noun');
    }
  }
}
