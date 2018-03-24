import { AppThunkAction } from '../../../store';

import { KnownAction, ActionTypes, InitialSucceeded } from '../actions';
import { IException, isException, isNoContent } from '../../../utils/error';
import * as Api from "../apis";
import { InitialState, SignInContent } from '../../../models/initial';

export const initialAction = (): AppThunkAction<KnownAction> => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.INITIAL_STARTED });
    const response = await Api.getSignInContent();
    if (!response.ok) {
      throw { httpCode: response.status, message: await response.json() } as IException;
    }
    const data = isNoContent(response) ? undefined : await response.json();
    dispatch({ type: ActionTypes.INITIAL_SUCCEEDED, signInContent: data });
  } catch (e) {
    if (isException(e)) {
      console.log(e.httpCode, e.message);
      dispatch({ type: ActionTypes.INITIAL_FAILED });
    }
    else {
      //jump to exception page
      console.log("e!:", e);
    }
  }
}

export const initialStarted = (state: InitialState) => state.set("isLoading", true);

export const initialSucceeded = (state: InitialState, action: InitialSucceeded) => {
  alert(1);
  return state
    .set("isLoading", false)
    .set("signInContent", action.signInContent ? new SignInContent(action.signInContent) : undefined);
}

export const initialFailed = (state: InitialState) => state.set("isLoading", false);
