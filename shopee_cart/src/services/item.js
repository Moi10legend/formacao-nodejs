async function createItem(name, price, quantity){
    return{
        Name: name,
        Price: price,
        Quantity: quantity,
        Subtotal: () => price * quantity
            
        }
}

export default createItem;