import { appState } from "../AppState.js";

class SnacksService {

selectSnack(name) {
    console.log('set active snack ran');
    let found = appState.snacks.find(s => s.name == name)
    console.log(found)
    return found
}

getMoney() {
    appState.money += 1
    console.log(appState.money)
}

}

export const snacksService = new SnacksService()