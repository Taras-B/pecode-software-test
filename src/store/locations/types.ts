import { Action } from 'redux'
import { ILocationData, IInfoAndPagination } from '../rootTypes'

export interface ILocationsState {
  infoData: IInfoAndPagination | null
  data: ILocationData[] | null
}

export enum EnumLocationsActionType {
  FETCH_LOCATION = 'locations/FETCH_LOCATION',
  SET_LOCATION_DATA = 'locations/SET_LOCATION_DATA',
  SET_LOCATION_INFO = 'locations/SET_LOCATION_INFO',
}

export interface IFetchLocationsAction extends Action<EnumLocationsActionType> {
  type: EnumLocationsActionType.FETCH_LOCATION
  payload: number
}
export interface ISetLocationsDataAction extends Action<EnumLocationsActionType> {
  type: EnumLocationsActionType.SET_LOCATION_DATA
  payload: Array<ILocationData> | null
}
export interface ISetLocationsInfoAction extends Action<EnumLocationsActionType> {
  type: EnumLocationsActionType.SET_LOCATION_INFO
  payload: IInfoAndPagination | null
}

export type LocationsActionType =
  | IFetchLocationsAction
  | ISetLocationsDataAction
  | ISetLocationsInfoAction
