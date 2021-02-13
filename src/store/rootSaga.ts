import { all } from 'redux-saga/effects'
import { sagaCharacterWatcher } from './characters/saga'
import { sagaEpisodesWatcher } from './episodes/saga'

export function* rootSaga() {
  yield all([sagaCharacterWatcher(), sagaEpisodesWatcher()])
}
