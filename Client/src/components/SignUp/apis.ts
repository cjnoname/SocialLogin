import server from '../../utils/server';

export const signUp = (data: any) => server.post("signIn/signUp", data);
