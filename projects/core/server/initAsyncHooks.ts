import { AsyncLocalStorage } from 'async_hooks'
import { RemultAsyncLocalStorage } from '../src/context.js'

let init = false

export function initAsyncHooks() {
  if (init) return
  init = true
  RemultAsyncLocalStorage.instance = new RemultAsyncLocalStorage(
    new AsyncLocalStorage(),
  )
}
