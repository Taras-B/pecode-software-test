import { all } from 'redux-saga/effects'
import { sagaCharacterWatcher } from './characters/saga'

export function* rootSaga() {
  yield all([sagaCharacterWatcher()])
}
