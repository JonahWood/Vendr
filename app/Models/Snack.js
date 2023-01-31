


export class Snack {
    constructor(name, price, img) {
    this.name = name
    this.price = price
    this.imgUrl = img
}


get ListTemplate() {
    return `
    <div onclick='app.snackController.setActiveSnack()'> ${this.name} </div>
    `
}

}
