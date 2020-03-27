import Cart from './cart'
import IItem from './interface/IItem';

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

let item3:IItem = {
    itemName : 'Samsung S10',
    itemCat :"Phones",
    itemPrice :600,
    itemQuant : 2,
    itemDesc : "white"
};

Cart.addItem(item);
Cart.addItem(item2);
Cart.addItem(item3);

Cart.removeItemByID(3);
console.log(Cart.getCartSize());
console.log(Cart.getCartTotal());

