import { Record } from 'immutable';
import { SignInContent } from './signIn';
import { SignUpContent } from './signUp';

interface Interface {
    isLoading: boolean;
    signInContent?: SignInContent;
    signUpContent?: SignUpContent;
}

const initialValue = Record<Interface>({
    isLoading: false,
    signInContent: undefined,
    signUpContent: undefined
})

export class InitialState extends initialValue { }
