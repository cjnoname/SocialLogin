import { AppThunkAction } from 'store';
import { KnownAction, ActionTypes, InitialSucceeded } from '../actions';
import * as Api from '../apis';
import { InitialState, Initial, SignInContent, SignUpContent } from 'models/initial';

export const initialAction = (): AppThunkAction<KnownAction> => async (dispatch) => {
  try {
    const initial = await Api.getInitialValues();
    dispatch({ type: ActionTypes.INITIAL_SUCCEEDED, initial });
  } catch (e) {
    dispatch({ type: ActionTypes.INITIAL_FAILED });
  }
};

export const initialStarted = (state: InitialState) => state.set('isLoading', true);

export const initialSucceeded = (state: InitialState, action: InitialSucceeded) => {
  return state
    .set('isLoading', false)
    .set('signInContent', action.initial ? new SignInContent(action.initial!.signInContent) : undefined)
    .set('signUpContent', action.initial ? new SignUpContent(action.initial!.signUpContent) : undefined);
};

export const initialFailed = (state: InitialState) => state.set('isLoading', false);
