import { Record, List } from 'immutable';
import { convertListToImmutable } from 'utils/immutable';
import { CustomerOptInItem, CustomerConsentItem } from './';

interface Interface {
    signInAuthenticators?: List<string>,
    customerOptInItems?: List<CustomerOptInItem>,
    customerConsentItems?: List<CustomerConsentItem>,
}

const initialValue = Record<Interface>({
    signInAuthenticators: undefined,
    customerOptInItems: undefined,
    customerConsentItems: undefined,
});

export class SignUpContent extends initialValue {
    constructor(args: any = {}) {
        super(Object.assign({}, args as Interface, {
            customerOptInItems: convertListToImmutable(args.customerOptInItems, CustomerOptInItem),
            customerConsentItems: convertListToImmutable(args.customerConsentItems, CustomerConsentItem),
        }));
    }
}
