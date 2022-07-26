import React, {createContext, useState} from 'react';
export const CartContext = createContext();

export  function CartProvider(props) {
    const [items, setItems] = useState([]);
    
    function addToCart(product) {
        const id = product.id
        setItems((prevItems)=>{
        const item = prevItems.find((item)=>(item.id == id) );
        if(!item) {
          return[...prevItems, {
              id, 
              qty:1,
              product,
              totalPrice : parseInt(product.prod_price)
          }]
        }
        else {
          return prevItems.map((item)=>{
              if(item.id == id) {
                  item.qty++;
                  item.totalPrice += parseInt(product.prod_price)
              }
              return item;
          })
        }
        })
    }
    
    function getItemCount() {
    return items.reduce((sum, item)=>(sum + item.qty), 0)
    }
    function getTotalPrice() {
    return items.reduce((sum,item)=>(sum + item.totalPrice), 0)
    }
    function getDeleteCount() {
      console.log("DELETE")
    }
    return(
    <CartContext.Provider value={{items, getItemCount, getTotalPrice, addToCart,getDeleteCount}}>
        {props.children}
    </CartContext.Provider>
    )
}