import { ofType } from 'redux-observable'
import * as actionTypes from './action_type'
const loadingEpic = (action$, state$) => action$.pipe(
  ofType(actionTypes.LOADING_ACTION),
  () => ({
    name: state$ 
  })
)