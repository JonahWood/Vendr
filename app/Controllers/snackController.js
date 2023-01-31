import { appState } from "../AppState.js";
import { snacksService } from "../Services/snacksService.js";
import { setHTML } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";

// SECTION private functions

function drawSnacks(){
    let snack = appState.snacks
    let template = ''
    snack.forEach(snack => template += snack.ListTemplate)
    // console.log('draw snacks is working', appState.Snack)
    setHTML('snacks', template)
}
function drawMoney() {
    let money = appState.money
    let template = ''
    for (let i = 0; i < money; i++) {
    template += `
    <div fs-1">
    <h1>
    You have $
    ${appState.money}
    </h1>
    </div>
    `
    }
    setHTML('money', template)
}

export class SnackController{
constructor(){
drawSnacks()
appState.on('money', drawMoney)
}



    // SECTION  public functions

    selectSnack(name){
    console.log('active snack ran')
    snacksService.selectSnack(name)
    }

    getMoney() {
        snacksService.getMoney()
}
        
    dispenseSnack(){

    }
}