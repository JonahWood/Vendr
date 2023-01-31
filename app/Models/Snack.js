


export class Snack {
    constructor(name, price, emoji) {
    this.name = name
    this.price = price
    this.emoji = emoji
}


get ListTemplate() {
    return `
    <div onclick='app.snackController.selectSnack()' class='products'> <h1> ${this.name} ${this.price} ${this.emoji} </h1> </div>
    `
}

}
