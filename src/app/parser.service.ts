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
      sentence.addWord(word);
    }

    return sentence;
  }
}
