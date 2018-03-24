import { Record } from 'immutable';

export interface Interface {
    isLoading: boolean;
}

const initialValue = Record<Interface>({
    isLoading: false,
})

export class SignInState extends initialValue { }
