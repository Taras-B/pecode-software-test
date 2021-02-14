import produce, { Draft } from 'immer'
import { LocationsActionType, EnumLocationsActionType, ILocationsState } from './types'

const initialLocationsState: ILocationsState = {
  infoData: null,
  data: null,
}

export const locationReducer = produce(
  (draft: Draft<ILocationsState>, action: LocationsActionType) => {
    switch (action.type) {
      case EnumLocationsActionType.FETCH_LOCATION:
        break
      case EnumLocationsActionType.SET_LOCATION_DATA:
        draft.data = action.payload
        break
      case EnumLocationsActionType.SET_LOCATION_INFO:
        draft.infoData = action.payload
        break

      default:
        break
    }
  },
  initialLocationsState
)
