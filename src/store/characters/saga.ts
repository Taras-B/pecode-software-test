import { takeEvery, call, put } from 'redux-saga/effects'
import { rickAndMortyAPI } from '../../api'
import { actionsCharacters } from './actionsCharacters'
import { EnumCharactersActionType } from './types'

function* getCharacter() {
  try {
    const data = yield call(rickAndMortyAPI.getCharacters)
    console.log(data)

    yield put(actionsCharacters.setData(data.results))
    yield put(actionsCharacters.setInfo(data.info))
  } catch (e) {
    console.log(e)
  }
}

export function* sagaCharacterWatcher() {
  yield takeEvery(EnumCharactersActionType.FETCH_CHARACTERS, getCharacter)
}
