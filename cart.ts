import ICart from './interface/ICart'
import IItem from './interface/IItem'

class Cart {

    private static count: number = 0;
    private static cart: ICart[] = [];
    private total :number = 0;

    constructor() {
    }
    /*
     *return all items in the Cart
     * @return ICart array
     * */
    getCarts(): ICart[] {
        return Cart.cart;
    }

    getCartTotal(): number {
        for (const item of Cart.cart){
           this.total += (item.itemQuant * item.itemPrice)

        }
        return this.total;
    }

    /*
    *get Cart size
    * @return the size of the Cart
    * */
    getCartSize(): number {
        return Cart.cart.length;
    }

    /*
    * add Item to the Cart
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
   * get Item by ID in the Cart and return Item
   * @param  number
   * @return any
   * */
    getItemByID(id: number): any {
        for (const cart of Cart.cart) {
            if (cart.itemID == id) return cart;
        }
    }

    /* get Item by Name in the Cart and return Item
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

    /* remove Item by ID in the Cart
    * @param  number
    * @return void
    * */
    removeItemByID(id: number): void{
         Cart.cart = Cart.cart.filter(value => {  return value.itemID !== id})
    }

    /* remove Item by Name in the Cart
   * @param  name
   * @return void
   * */
    removeItemByName(name: string): void {
        Cart.cart = Cart.cart.filter(value => {  return value.itemName !== name})
    }

    /* Update Item quantity in the Cart
      * @param itemID  , itemQuantity
      * @return void
      * */
    updateItemQuantity(_itemID: number, itemQ: number):void{
        for ( const item of Cart.cart){
                if (item.itemID == _itemID){
                    item.itemQuant = itemQ;
                    break;
                }
        }
    }

    /*remove all items
    *@return void
    * */
    clear(): void {Cart.cart = [];
    }

}

export default new Cart();