declare namespace API {
  interface RequestData<T> {
    url: string
    objectId: string
    data: T
    loading: boolean
  }

  type ResponseData<T> = Promise<{ results: T }>
}
