async function addItem(cart, item){
    cart.push(item);
}

async function addMoreOneQuantity(cart){
    
}

async function deleteItem(cart, item){
    cart.splice(cart.indexOf(item), 1);
}

async function removeItem(cart, item){
    
    if(cart[cart.indexOf(item)].Quantity > 1){
        cart[cart.indexOf(item)].Quantity -= 1;
    }else if(cart[item_index === 1]){
        deleteItem(cart, item);
    }else{
        console.log("Item não encontrado");
    }
}

async function displayCart(cart){
    console.log("Shopee cart list:");
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.Name} - R$${item.Price} | ${
            item.Quantity
        }x | Subtotal: R$${item.Subtotal()}`);
    });
}

async function totalCalculation(cart){
    console.log("Total Shopee cart is:");
    let somaTotal = 0;
    for(let i = 0; i < cart.length; i++){
        somaTotal += cart[i].Subtotal();
    }

    return somaTotal;
    //return cart.reduce((item, total) => total + item.subtotal(), 0);
}

export {
    totalCalculation,
    addItem,
    deleteItem,
    displayCart,
    removeItem
}