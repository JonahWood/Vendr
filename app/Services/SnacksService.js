import { appState } from "../AppState.js";

class SnacksService {

selectSnack() {
    console.log('set active snack ran');
    appState.selectSnack = foundSnack
}

}

export const snacksService = SnacksService