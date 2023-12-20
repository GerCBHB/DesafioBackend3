import { ProductManager } from "./ProductManager.js";

let miPrimeraTienda = new ProductManager("./products.json");

//title, description, price, thumbnail, code, stock
miPrimeraTienda.addProduct(
  "Recetario",
  "Recetario personalizado",
  350,
  "sin imagen",
  "005",
  10
);
miPrimeraTienda.addProduct(
  "Planificador",
  "Planificador semanal",
  250,
  "sin imagen",
  "002",
  5
);
miPrimeraTienda.addProduct(
  "Box",
  "Box Dinosaurio",
  650,
  "sin imagen",
  "003",
  3
);
