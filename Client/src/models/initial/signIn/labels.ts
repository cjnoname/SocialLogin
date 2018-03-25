import { Record, List } from 'immutable';
import { convertListToImmutable } from '../../../utils/immutable';

interface Interface {
    email: string,
    emailPrompt: string,
    password: string,
    passwordPrompt: string,
    passwordReveal: string,
    signInButton: string,
    forgotPassword: string,
    createProfile: string
}

const initialValue = Record<Interface>({
    email: '',
    emailPrompt: '',
    password: '',
    passwordPrompt: '',
    passwordReveal: '',
    signInButton: '',
    forgotPassword: '',
    createProfile: ''
})

export class Labels extends initialValue { }
