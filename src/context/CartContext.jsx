import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext =createContext(null)

export const CartProvider =({children})=>{
const [cartItem,setCartItem] =useState([])

const addToCart =(product)=>{
    const itemInCart = cartItem.find((item)=>item.id ===product.id);
    if(itemInCart){
        const updatedCart =cartItem.map((item)=>
          item.id===product.id ? {...item,quantity:item.quantity+1}:item
        );
        setCartItem(updatedCart)
        toast.success("Product quantity increased!")
    } else{
        // add new item
         setCartItem([...cartItem,{...product,quantity :1}])
         toast.success("Product is Added to Cart!")
    }
    
}
const updateQuantity = (productId, action) => {
  setCartItem(prevItems =>
    prevItems
      .map(item => {
        if (item.id === productId) {
          let newQuantity = item.quantity;

          if (action === "increase") {
            newQuantity += 1;
          } else if (action === "decrease") {
            newQuantity -= 1;

          }
          // If the quantity reaches 0, return null to filter out item
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      })
      .filter(item => item !== null)
  );
};

const deleteItem =(productId)=>{
    setCartItem(cartItem.filter(item=>item.id!==productId))
    toast.success("Product is removed!")
}
return <CartContext.Provider value={{cartItem,setCartItem,addToCart,updateQuantity,deleteItem}}>
    {children}
</CartContext.Provider>
}

export const useCart =()=>useContext(CartContext)