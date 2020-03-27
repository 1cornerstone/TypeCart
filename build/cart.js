"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this.total = 0;
    }
    /*
     *return all items in the Cart
     * @return ICart array
     * */
    Cart.prototype.getCarts = function () {
        return Cart.cart;
    };
    Cart.prototype.getCartTotal = function () {
        for (var _i = 0, _a = Cart.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            this.total += (item.itemQuant * item.itemPrice);
        }
        return this.total;
    };
    /*
    *get Cart size
    * @return the size of the Cart
    * */
    Cart.prototype.getCartSize = function () {
        return Cart.cart.length;
    };
    /*
    * add Item to the Cart
    * @param IItem
    * */
    Cart.prototype.addItem = function (_item) {
        Cart.count += 1;
        var item = {
            itemID: Cart.count,
            itemName: _item.itemName,
            itemCat: _item.itemCat,
            itemPrice: _item.itemPrice,
            itemQuant: _item.itemQuant,
            itemDesc: _item.itemDesc
        };
        Cart.cart.push(item);
    };
    /*
   * get Item by ID in the Cart and return Item
   * @param  number
   * @return any
   * */
    Cart.prototype.getItemByID = function (id) {
        for (var _i = 0, _a = Cart.cart; _i < _a.length; _i++) {
            var cart = _a[_i];
            if (cart.itemID == id)
                return cart;
        }
    };
    /* get Item by Name in the Cart and return Item
     * @param  number
     * @return any
     * */
    Cart.prototype.getItemByName = function (name) {
        var _match = [];
        for (var _i = 0, _a = Cart.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.itemName == name) {
                // @ts-ignore
                _match.push(item);
            }
        }
        return _match;
    };
    /* remove Item by ID in the Cart
    * @param  number
    * @return void
    * */
    Cart.prototype.removeItemByID = function (id) {
        Cart.cart = Cart.cart.filter(function (value) { return value.itemID !== id; });
    };
    /* remove Item by Name in the Cart
   * @param  name
   * @return void
   * */
    Cart.prototype.removeItemByName = function (name) {
        Cart.cart = Cart.cart.filter(function (value) { return value.itemName !== name; });
    };
    /* Update Item quantity in the Cart
      * @param itemID  , itemQuantity
      * @return void
      * */
    Cart.prototype.updateItemQuantity = function (_itemID, itemQ) {
        for (var _i = 0, _a = Cart.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.itemID == _itemID) {
                item.itemQuant = itemQ;
                break;
            }
        }
    };
    /*remove all items
    *@return void
    * */
    Cart.prototype.clear = function () {
        Cart.cart = [];
    };
    Cart.count = 0;
    Cart.cart = [];
    return Cart;
}());
exports.default = new Cart();
