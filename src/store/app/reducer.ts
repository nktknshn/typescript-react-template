import { createReducer } from 'deox';
import { none, some } from 'fp-ts/lib/Option';
import * as actions from './actions';
import { AppState } from './types';
import { ActionType } from 'typesafe-actions'

export type AppActions = ActionType<typeof actions>

const defaultState: AppState = {
  name: none,
  error: none
}

export const appReducer = createReducer(defaultState, handleAction => [
  handleAction(actions.setName, (state, { payload }) => ({ ...state, name: payload })),
  handleAction(actions.setError, (state, { payload }) => ({ ...state, error: payload })),
])