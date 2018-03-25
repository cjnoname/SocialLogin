import { Record, List } from 'immutable';
import { convertListToImmutable } from '../../../utils/immutable';

interface Interface {
    logoMain: string
}

const initialValue = Record<Interface>({
    logoMain: ''
})

export class Images extends initialValue { }
