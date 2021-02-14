import { all } from 'redux-saga/effects'
import { sagaCharacterWatcher } from './characters/saga'
import { sagaEpisodesWatcher } from './episodes/saga'
import { sagaLocationsWatcher } from './locations/saga'

export function* rootSaga() {
  yield all([sagaCharacterWatcher(), sagaEpisodesWatcher(), sagaLocationsWatcher()])
}
