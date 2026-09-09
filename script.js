// Café Dinorín - Application Logic
let cart = [];

function addToCart(productName, price, selectId) {
  const grind = document.getElementById(selectId).value;
  const existingIndex = cart.findIndex(item => item.name === productName && item.grind === grind);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ id: Date.now(), name: productName, price: price, grind: grind, quantity: 1 });
  }
  alert('Producto agregado al carrito: ' + productName);
}