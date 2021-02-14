import { takeEvery, call, put } from 'redux-saga/effects'

import { actionsWatchList } from './actions'
import { EnumWatchListActionType } from './types'

function* getWatchList() {
  try {
    const data = yield call([localStorage, 'getItem'], 'watchList')
    // const data = localStorage.getItem('watchList')

    if (data === null) {
      yield put(actionsWatchList.setData([]))
    } else {
      yield put(actionsWatchList.setData(JSON.parse(data)))
    }
  } catch (e) {
    console.log(e)
  }
}

export function* sagaWatchListWatcher() {
  yield takeEvery(EnumWatchListActionType.FETCH_ITEMS, getWatchList)
}
