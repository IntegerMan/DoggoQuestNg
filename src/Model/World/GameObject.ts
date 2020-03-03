import {CommandContext} from '../CommandContext';

export type objectResponse = ((context: CommandContext) => void) | string;

export interface GameObject {
  name: objectResponse;
  look: objectResponse;
  smell: objectResponse;
  taste: objectResponse;
  push?: objectResponse;
  eat?: objectResponse;
  take?: objectResponse;
}
