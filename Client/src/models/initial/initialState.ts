import { Record } from 'immutable';
import { SignInContent } from './';

export interface Interface {
    isLoading: boolean;
    signInContent?: SignInContent;
}

const initialValue = Record<Interface>({
    isLoading: false,
    signInContent: undefined
})

export class InitialState extends initialValue { }
