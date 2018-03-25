import { Record, List } from 'immutable';

interface Interface {
    Id: string,
    Label: string,
    DefaultValue: string,
}

const initialValue = Record<Interface>({
    Id: '',
    Label: '',
    DefaultValue: '',
})

export class CustomerConsentItem extends initialValue { }
