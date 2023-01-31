import { appState } from "../AppState.js";
import { snacksService } from "../Services/snacksService.js";
import { setHTML } from "../Utils/Writer.js";

// SECTION private functions

function drawSnacks(){
    let snack = appState.snacks
    let template = ''
    snack.forEach(snack => template += snack.ListTemplate)
    // console.log('draw snacks is working', appState.Snack)
    setHTML('snacks', template)
}

export class SnackController{
constructor(){
drawSnacks()
}

    // SECTION  public functions

    setActiveSnack(name){
        console.log('active snack ran', + name)
    snacksService.setActiveSnack()
    }
}