import { Record } from 'immutable';
import { Values } from './values';
import { Theme } from './theme';

interface Interface {
  isLoading: boolean,
  values?: Values
}

const initialValue = Record<Interface>({
  isLoading: false,
  values: undefined
});

export class InitialState extends initialValue { }
