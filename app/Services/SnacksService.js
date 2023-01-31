import { appState } from "../AppState.js";

class SnacksService {
    buySnack(name){
        let found = appState.snacks.find(s => s.name == name)
        appState.money -= found.price
    }
    

    // SECTION the long way to do what i did above VVVVVVVV
//     selectSnack(name, price) {
//     appState.money -= price
//     console.log('select snack ran');
//     let found = appState.snacks.find(s => s.name == name)
//     console.log(found)
//     return found
// }

getMoney() {
    appState.money += 1
    // console.log(appState.money)
}

}

export const snacksService = new SnacksService()