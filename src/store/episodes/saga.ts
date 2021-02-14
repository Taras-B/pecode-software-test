import { takeEvery, call, put } from 'redux-saga/effects'
import { rickAndMortyAPI } from '../../api'
import { actionsEpisode } from './actions'
import { EnumEpisodesActionType, IFetchEpisodesAction } from './types'

function* getEpisodes({ payload }: IFetchEpisodesAction) {
  try {
    const data = yield call(rickAndMortyAPI.getEpisodes, payload)

    if (data?.error) {
      yield put(actionsEpisode.setData([]))
      yield put(actionsEpisode.setInfo(null))
    } else {
      yield put(actionsEpisode.setData(data.results))
      yield put(actionsEpisode.setInfo(data.info))
    }
  } catch (e) {
    console.log(e)
  }
}

export function* sagaEpisodesWatcher() {
  yield takeEvery(EnumEpisodesActionType.FETCH_EPISODES, getEpisodes)
}
