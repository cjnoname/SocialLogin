import { Record, List } from 'immutable';
import { convertListToImmutable } from 'utils/immutable';
import { SignIn, Footer, Images, Icons } from './';

interface Interface {
  signInOption: List<string>,
  mobileConfigUrl: string,
  customerListId: number,
  signIn?: SignIn,
  footer?: Footer,
  images?: Images,
  icons?: Icons
}

const initialValue = Record<Interface>({
  signInOption: List<string>(),
  mobileConfigUrl: '',
  customerListId: 0,
  signIn: undefined,
  footer: undefined,
  images: undefined,
  icons: undefined
});

export class SignInContent extends initialValue {
  constructor(args: any = {}) {
    super(Object.assign({}, args as Interface, {
      signIn: args.signIn && new SignIn(args.signIn),
      footer: args.footer && new Footer(args.footer),
      images: args.images && new Images(args.images),
      icons: args.icons && new Icons(args.icons)
    }));
  }
}
