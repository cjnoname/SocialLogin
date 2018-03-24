import { Record, List } from 'immutable';
import { convertListToImmutable } from '../../utils/immutable';
import { ClientResourceAccess, ClientAccessParameter, ClientImpersonationClient } from './';

interface Interface {
    clientId: string;
    secret?: string;
    salt?: string;
    name?: string;
    // accessToken?: AccessToken;
    clientResourceAccess?: List<ClientResourceAccess>;
    clientAccessParameter?: List<ClientAccessParameter>;
    clientImpersonationClient?: List<ClientImpersonationClient>;
}

const initialValue = Record<Interface>({
    clientId: "",
    secret: undefined,
    salt: undefined,
    name: undefined,
    // accessToken: undefined,
    clientResourceAccess: undefined,
    clientAccessParameter: undefined,
    clientImpersonationClient: undefined,
})

export class Client extends initialValue {
    constructor(args: any = {}) {
        super(Object.assign({}, args as Interface, {
            client: args.client && new Client(args.client),
            clientResourceAccess: convertListToImmutable(args.clientResourceAccess, ClientResourceAccess),
            clientAccessParameter: convertListToImmutable(args.clientAccessParameter, ClientAccessParameter),
            clientImpersonationClient: convertListToImmutable(args.clientImpersonationClient, ClientImpersonationClient)
        }));
    }
}
