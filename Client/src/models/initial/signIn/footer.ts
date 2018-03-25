import { Record, List } from 'immutable';
import { convertListToImmutable } from '../../../utils/immutable';
import { Privacy } from './';

interface Interface {
    purchase: string,
    termsAndCondition: string,
    privacy?: Privacy
}

const initialValue = Record<Interface>({
    purchase: '',
    termsAndCondition: '',
    privacy: undefined
})

export class Footer extends initialValue {
    constructor(args: any = {}) {
        super(Object.assign({}, args as Interface, {
            privacy: args.privacy && new Privacy(args.privacy)
        }));
    }
}
