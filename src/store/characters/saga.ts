import { takeEvery, call, put } from 'redux-saga/effects'
import { rickAndMortyAPI } from '../../api'
import { actionsCharacters } from './actionsCharacters'
import { EnumCharactersActionType, IFetchCharactersAction } from './types'

function* getCharacter({ payload }: IFetchCharactersAction) {
  try {
    const data = yield call(rickAndMortyAPI.getCharacters, payload)
    console.log(data)
    if (data?.error) {
      yield put(actionsCharacters.setData([]))
      yield put(actionsCharacters.setInfo(null))
    }
    yield put(actionsCharacters.setData(data.results))
    yield put(actionsCharacters.setInfo(data.info))
  } catch (e) {
    console.log(e)
  }
}

export function* sagaCharacterWatcher() {
  yield takeEvery(EnumCharactersActionType.FETCH_CHARACTERS, getCharacter)
}
