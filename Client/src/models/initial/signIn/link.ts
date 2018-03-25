import { Record, List } from 'immutable';
import { convertListToImmutable } from '../../../utils/immutable';

interface Interface {
    text: string,
    href: string
}

const initialValue = Record<Interface>({
    text: '',
    href: ''
})

export class Link extends initialValue { }
