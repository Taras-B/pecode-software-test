import { Action } from 'redux'
import { IEpisodeData, IInfoAndPagination } from '../rootTypes'

export interface IEpisodesState {
  infoData: IInfoAndPagination | null
  data: IEpisodeData[] | null
}

export enum EnumEpisodesActionType {
  FETCH_EPISODES = 'characters/FETCH_EPISODES',
  SET_EPISODES_DATA = 'characters/SET_EPISODES_DATA',
  SET_EPISODES_INFO = 'characters/SET_EPISODES_INFO',
}

export interface IFetchEpisodesAction extends Action<EnumEpisodesActionType> {
  type: EnumEpisodesActionType.FETCH_EPISODES
  payload: number
}
export interface ISetEpisodesDataAction extends Action<EnumEpisodesActionType> {
  type: EnumEpisodesActionType.SET_EPISODES_DATA
  payload: Array<IEpisodeData> | null
}
export interface ISetEpisodesInfoAction extends Action<EnumEpisodesActionType> {
  type: EnumEpisodesActionType.SET_EPISODES_INFO
  payload: IInfoAndPagination | null
}

export type EpisodesActionType =
  | IFetchEpisodesAction
  | ISetEpisodesDataAction
  | ISetEpisodesInfoAction
