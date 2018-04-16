import { AppThunkAction } from 'store';
import { KnownAction, ActionTypes, InitialSucceeded } from '../actions';
import * as Api from '../apis';
import { InitialState, Values } from 'models/initial';

export const initialAction = (): AppThunkAction<KnownAction> => async (dispatch) => {
  try {
    const values = await Api.getInitialValues();
    dispatch({ type: ActionTypes.INITIAL_SUCCEEDED, values });
  } catch (e) {
    dispatch({ type: ActionTypes.INITIAL_FAILED });
  }
};

export const initialStarted = (state: InitialState) => state.set('isLoading', true);

export const initialSucceeded = (state: InitialState, action: InitialSucceeded) => {
  // (window as any).theme = action.values!.theme;
  return state
    .set('isLoading', false)
    .set('values', action.values ? new Values(action.values) : undefined);
};

export const initialFailed = (state: InitialState) => state.set('isLoading', false);
