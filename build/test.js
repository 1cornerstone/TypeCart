"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cart_1 = __importDefault(require("./cart"));
var item = {
    itemName: 'IPhone X',
    itemCat: "Phones",
    itemPrice: 500,
    itemQuant: 2,
    itemDesc: " refurbished Silver "
};
var item2 = {
    itemName: 'IPhone 11',
    itemCat: "Phones",
    itemPrice: 300,
    itemQuant: 1,
    itemDesc: "Black"
};
var item3 = {
    itemName: 'Samsung S10',
    itemCat: "Phones",
    itemPrice: 600,
    itemQuant: 2,
    itemDesc: "white"
};
cart_1.default.addItem(item);
cart_1.default.addItem(item2);
cart_1.default.addItem(item3);
cart_1.default.removeItemByID(3);
console.log(cart_1.default.getCartSize());
console.log(cart_1.default.getCartTotal());
