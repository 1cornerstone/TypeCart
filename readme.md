**CART**

A flexible and modern shopping cart package.

   Cart interface
   
   - Id of the Item ( Autoincrement)
   - name of the item
   - item category
   - item prize
   - quantity
   - item desc
    
  usage
    
   import the Cart class and IItem interface
        
        import Cart from './cart'
         import IItem from './interface/IItem';
            
to add Item to cart  create variable of type IItem
    
    let item:IItem = {
        itemName : 'IPhone X',
        itemCat :"Phones",
        itemPrice :500,
        itemQuant : 2,
        itemDesc : " refurbished Silver "
    };   
          
As each Item selector name implies , 
   - itemName : Name of the item
   - itemCat :   Category of the item
   - itemPrice : Amount of the item
   - itemQuant : Quantity of the item
   - itemDesc :  Description of item
    
  adding item into cart is so simple, just call the assigned variable name you used to import the class
  

  Cart.addItem(item); // add item to cart
  
list of available methods

    - getCarts()  //get list of items in the cart
    - getCartSize //size of the cart
    - getCartTotal   //get total sum of item in the cart
    - addItem  //add item
    - getItemByID // get Item using ID
    - getItemByName //get Item using name
    - removeItemByID //remove item using ID
    - removeItemByName //remove item using Name
    - updateItemQuantity //update  Quantity of item
    - clear // clear cart
      
 