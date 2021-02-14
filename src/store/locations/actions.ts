import { ILocationData, IInfoAndPagination } from '../rootTypes'
import {
  EnumLocationsActionType,
  IFetchLocationsAction,
  ISetLocationsDataAction,
  ISetLocationsInfoAction,
} from './types'

export const actionsLocation = {
  fetch: (payload: number): IFetchLocationsAction => ({
    type: EnumLocationsActionType.FETCH_LOCATION,
    payload,
  }),
  setData: (payload: ILocationData[] | null): ISetLocationsDataAction => ({
    type: EnumLocationsActionType.SET_LOCATION_DATA,
    payload,
  }),
  setInfo: (payload: IInfoAndPagination | null): ISetLocationsInfoAction => ({
    type: EnumLocationsActionType.SET_LOCATION_INFO,
    payload,
  }),
}
