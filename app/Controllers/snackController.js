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
    template += `
    <div fs-1"><h1>
    You have $${appState.money}
    </h1></div>
    `
    setHTML('money', template)
}

export class SnackController{
constructor(){
drawSnacks()
appState.on('money', drawMoney)
}



    // SECTION  public functions

    selectSnack(name, price){
    // console.log('active snack ran')
    snacksService.selectSnack(name, price)
    }

    getMoney() {
        snacksService.getMoney()
}

buySnack(name){
snacksService.buySnack(name)
}

    dispenseSnack(){

    }
}