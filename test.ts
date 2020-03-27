import Cart from './lib/cart'
import IItem from "./lib/interface/IItem";


let item:IItem = {
    itemName : 'IPhone X',
    itemCat :"Phones",
    itemPrice :500,
    itemQuant : 2,
    itemDesc : " refurbished Silver "
};

let item2:IItem = {
    itemName : 'IPhone 11',
    itemCat :"Phones",
    itemPrice :300,
    itemQuant : 1,
    itemDesc : "Black"
};

Cart.addItem(item);
Cart.addItem(item2);

//console.log(Cart.getCarts());
console.log(Cart.getItemByName('IPhone 11'));
