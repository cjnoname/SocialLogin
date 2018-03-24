import { Record, List } from 'immutable';
import { convertListToImmutable } from '../../utils/immutable';
import { Link } from './';

interface Interface {
    link?: Link
}

const initialValue = Record<Interface>({
    link: undefined
})

export class Privacy extends initialValue {
    constructor(args: any = {}) {
        super(Object.assign({}, args as Interface, {
            link: args.link && new Link(args.link)
        }));
    }
}
