import server from '../../utils/server';

export const signIn = (data: any) => server.post("signIn/signIn", data);
