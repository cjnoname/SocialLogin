import { Initial } from '../../models/initial';
import { initialAction } from './workers/initial';

export enum ActionTypes {
  INITIAL_STARTED = 'INITIAL_STARTED',
  INITIAL_SUCCEEDED = 'INITIAL_SUCCEEDED',
  INITIAL_FAILED = 'INITIAL_FAILED',
}

export interface InitialStarted {
  type: ActionTypes.INITIAL_STARTED
}

export interface InitialSucceeded {
  type: ActionTypes.INITIAL_SUCCEEDED,
  initial?: Initial
}

export interface InitialFailed {
  type: ActionTypes.INITIAL_FAILED
}

export type KnownAction = InitialStarted | InitialSucceeded | InitialFailed;

export const actionCreators = {
  initialAction
};
