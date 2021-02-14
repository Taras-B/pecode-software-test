import { takeEvery, call, put } from 'redux-saga/effects'
import { rickAndMortyAPI } from '../../api'
import { actionsLocation } from './actions'
import { EnumLocationsActionType, IFetchLocationsAction } from './types'

function* getLocations({ payload }: IFetchLocationsAction) {
  try {
    const data = yield call(rickAndMortyAPI.getLocations, payload)
    console.log('LOCATIONS', data)

    if (data?.error) {
      yield put(actionsLocation.setData([]))
      yield put(actionsLocation.setInfo(null))
    } else {
      yield put(actionsLocation.setData(data.results))
      yield put(actionsLocation.setInfo(data.info))
    }
  } catch (e) {
    console.log(e)
  }
}

export function* sagaLocationsWatcher() {
  yield takeEvery(EnumLocationsActionType.FETCH_LOCATION, getLocations)
}
