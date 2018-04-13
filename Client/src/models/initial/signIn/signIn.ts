import { Record, List } from 'immutable';
import { convertListToImmutable } from 'utils/immutable';
import { Labels } from './';

interface Interface {
    sectionTitle: string,
    intro: string,
    subIntro: string,
    help: string,
    labels: Labels
}

const initialValue = Record<Interface>({
    sectionTitle: '',
    intro: '',
    subIntro: '',
    help: '',
    labels: new Labels()
});

export class SignIn extends initialValue {
    constructor(args: any = {}) {
        super(Object.assign({}, args as Interface, {
            labels: args.labels && new Labels(args.labels)
        }));
    }
}
