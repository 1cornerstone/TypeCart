import ICart from './interface/ICart'
import IItem from './interface/IItem'

class Cart {

    private static count: number = 0;
    private static cart: ICart[] = [];

    constructor() {
    }

    /*
     *return all items in the cart
     * @return ICart array
     * */
    getCarts(): ICart[] {
        return Cart.cart;
    }

    cartTotal(): number {
        return 0;
    }

    /*
    *get cart size
    * @return the size of the cart
    * */
    cartSize(): number {
        return Cart.cart.length;
    }

    /*
    * add Item to the cart
    * @param IItem
    * */
    addItem(_item: IItem): void {
        Cart.count += 1;
        let item: ICart = {
            itemID: Cart.count,
            itemName: _item.itemName,
            itemCat: _item.itemCat,
            itemPrice: _item.itemPrice,
            itemQuant: _item.itemQuant,
            itemDesc: _item.itemDesc
        };
        Cart.cart.push(item);
    }

    /*
   * get Item by ID in the cart and return Item
   * @param  number
   * @return any
   * */
    getItemByID(id: number): any {
        for (const cart of Cart.cart) {
            if (cart.itemID == id) return cart;
        }
    }

    /* get Item by Name in the cart and return Item
     * @param  number
     * @return any
     * */
    getItemByName(name: string): any {
        let _match :[] = [];
        for (const item of Cart.cart) {
            if (item.itemName == name){
                // @ts-ignore
                _match.push(item)
            }
        }
        return _match
    }

    removeItemByID(id: number): void{

    }

    removeItemByName(name: string): void {
    }

    updateItemQuantity(itemQ: number, name?: string, itemID?: number): void{

    }

    /*
    *remove all items
    *@return void
    * */
    remove(): void {Cart.cart = [];
    }

}

export default new Cart();