const params = new URLSearchParams(window.location.search);

const totalPrice = params.get('total-price');

const cart = JSON.parse(params.get('cart'));


let content = '';
content +=`<div>Terimakasih atas pesanan anda: Rp ${(totalPrice * 1000).toLocaleString()}</div>`
content +=`<di>cart = ${cart}`;

document.getElementById("outer").innerHTML = content;