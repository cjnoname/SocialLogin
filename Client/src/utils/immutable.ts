import { List } from 'immutable';

export const convertListToImmutable = (args: any, Cls: any) => (args && args.length > 0) ? List(args.map((val: any) => new Cls(val))) : undefined;
