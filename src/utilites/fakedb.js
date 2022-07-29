// local storage data manage

const addToDb =(id)=>{
 let shoppingCart ={};

//    get the shopping cart

    const storeCart = localStorage.getItem('shoppingCart')
    if(storeCart){
        shoppingCart = JSON.parse(storeCart)
    }
   
    // add quantity 

    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else{
     shoppingCart[id] =1
      
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))

}

const removeFromDb = (id) =>{
const storeCart = localStorage.getItem('shoppingCart')
if(storeCart){
    const shoppingCart = JSON.parse(storeCart)
    if(id in shoppingCart){
      delete shoppingCart[id];
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))

    }
}
}
const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}
export {addToDb, removeFromDb, deleteShoppingCart}