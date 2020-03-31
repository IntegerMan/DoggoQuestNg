import {CommandContext} from '../CommandContext';

export type objectResponse = ((context: CommandContext) => void) | string;

export interface GameObject {
  name: objectResponse;
  look: objectResponse;
  smell: objectResponse;
  lick: objectResponse;
  push: objectResponse;
  eat: objectResponse;
  take: objectResponse;
  think: objectResponse;
  children: GameObject[];

  matches(reduced: string): boolean;
}
