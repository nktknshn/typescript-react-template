import { createAction, createActionCreator } from 'deox'
import { AppState, AppError } from './types'
import { Option } from 'fp-ts/lib/Option'

export const setName = createActionCreator('SET_NAME', resolve => (name: Option<string>) => resolve(name))
export const setError = createActionCreator('SET_ERROR', resolve => (error: AppState['error']) => resolve(error))