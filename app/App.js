import { ValuesController } from "./Controllers/ValuesController.js";
import { SnackController } from "./Controllers/snackController.js";

class App {
  // valuesController = new ValuesController();
  SnackController = new SnackController();
}

window["app"] = new App();
