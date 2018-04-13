import { Record, List } from 'immutable';

interface Interface {
    id: string,
    label: string,
    defaultValue: boolean,
}

const initialValue = Record<Interface>({
    id: '',
    label: '',
    defaultValue: false,
});

export class CustomerOptInItem extends initialValue { }
