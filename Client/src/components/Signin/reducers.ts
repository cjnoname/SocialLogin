import { Action, Reducer, ActionCreator } from 'redux';
import { KnownAction, ActionTypes } from './actions';
import * as signIn from './workers/signInDetails';
import { SignInState } from '../../models/signIn';

export const SignInReducer: Reducer<SignInState> = (state: SignInState, incomingAction: Action) => {
  // const action = incomingAction as KnownAction;
  // switch (action.type) {
  //   case ActionTypes.GET_OAUTH_STARTED: { return signIn.getOAuthStarted(state) };
  //   case ActionTypes.GET_OAUTH_SUCCEEDED: { return signIn.getOAuthSucceeded(state, action) };
  //   case ActionTypes.GET_OAUTH_FAILED: { return signIn.getOAuthFailed(state) };
  // }
  return state || new SignInState();
};
