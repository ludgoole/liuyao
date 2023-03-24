import { GET, POSt } from './index'

export const getTestData = (params = {}) => GET('/1.1/classes/test', params)
export const getMockData = (params = {}) => POSt('/mock/test.json', params)
