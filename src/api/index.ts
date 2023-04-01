import { DELETE, GET, POSt, PUT } from './request'

export const getLiuyao = (params = {}): API.ResponseData<DATABASE.Zhouyi[]> => GET('/1.1/classes/liuyao', params)

export const getGuali = (params = {}): API.ResponseData<DATABASE.Guali_EN[]> => GET('/1.1/classes/guali', params)
export const postGuali = (params = {}): API.ResponseData<DATABASE.Guali_EN[]> => POSt('/1.1/classes/guali', params)
export const putGuali = (objectId = '', params = {}): API.ResponseData<DATABASE.Guali[]> => PUT('/1.1/classes/guali', objectId, params)
export const deleteGuali = (objectId = ''): API.ResponseData<DATABASE.Guali[]> => DELETE('/1.1/classes/guali', objectId)
