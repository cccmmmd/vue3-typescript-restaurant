import {recommendstatusList} from './constants'

export type recommendstatus = typeof recommendstatusList[number]
export type cusinType = '素食'| '正常' | '減肥' | '無過敏' | 'others'

export interface Dish {
    name?: string
    type?: cusinType
    status?: recommendstatus
  }