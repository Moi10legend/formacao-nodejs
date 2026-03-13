import createItem from "./services/item.js"
import { totalCalculation, addItem, deleteItem, displayCart } from "./services/cart.js";

const cart = [];
const wishList = [];

console.log("Welcome to your Shopee cart!");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);

await addItem(cart, item1);
await addItem(cart, item2);

displayCart(cart)

console.log(await totalCalculation(cart));

// await deleteItem(cart, "Hotwheels Lamborghini")
// console.log(await totalCalculation(cart));