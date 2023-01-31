


export class Snack {
    constructor(name, price, emoji) {
    this.name = name
    this.price = price
    this.emoji = emoji
}


get ListTemplate() {
    return `
    <div class='products '>
    <h1> ${this.name} $${this.price}0 
    <button class="shadow-lg" onclick="app.snackController.selectSnack('${this.name}')"> ${this.emoji} </button> 
    </h1> 
    </div>
    `
}

}
