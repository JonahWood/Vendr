import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Snack').Snack[]} */
snacks = [
  new Snack('candy', 1.50,'🍭'),
  new Snack('chips', 2.50, '🥔'), 
  new Snack('soda', 3.50, '🥤'),
]

  /** @type {import('./Models/Snack').Snack|null} */
  selectSnack = null

  money = 0
}














export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
