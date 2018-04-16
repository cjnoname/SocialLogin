import { Record } from 'immutable';
import { SignInContent, SignUpContent, Theme } from '../';

interface Interface {
  signInContent?: SignInContent;
  signUpContent?: SignUpContent;
  theme?: Theme;
}

const initialValue = Record<Interface>({
  signInContent: undefined,
  signUpContent: undefined,
  theme: undefined
});

export class Values extends initialValue {
  constructor(args: any = {}) {
    super(Object.assign({}, args as Interface, {
      signInContent: args.signInContent && new SignInContent(args.signInContent),
      signUpContent: args.signUpContent && new SignUpContent(args.signUpContent),
      // theme: args.theme && new Theme(args.theme)
    }));
  }
}
