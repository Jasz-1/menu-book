const params = new URLSearchParams(window.location.search);
const totalPrice = parseInt(params.get('total-price'));
const cart = JSON.parse(params.get('cart'));

const serviceCharge = totalPrice * 0.05;
const pb1 = totalPrice * 0.1;
const finalPrice = serviceCharge + pb1 + totalPrice;

const date = new Date().toLocaleString('id-ID');

let orderQty = 0;

let content = '';

let final ='';



for (let i = 0; i < cart.length; i++) {
    const e = cart[i];

    if (e[0] > 0) {
        orderQty += e[1];
        content += `<div class="row"><div>${e[0]} ${menus[i].title} (${menus[i].prices[0].label})</div><div>${(e[0] * menus[i].prices[0].price * 1000).toLocaleString()}</div></div>`;
    }

    if (e[1] > 0) {
        orderQty += e[1];
        content += `<div class="row"><div>${e[1]} ${menus[i].title} (${menus[i].prices[1].label})</div><div>${(e[1] * menus[i].prices[1].price * 1000).toLocaleString()}</div></div>`;
    }
}


final += `<div class="row"><div>Subtotal </div> <div>${(totalPrice * 1000).toLocaleString()}</div></div>
<div class="row"><div>Serv 5% </div> <div>${(serviceCharge * 1000).toLocaleString()}</div></div>
<div class="row"><div>PB 1 10% </div> <div>${(pb1 * 1000).toLocaleString()}</div></div>
`;


function sumOrderedItems(cart) {
    let totalItems = 0;
    
    for (let i = 0; i < cart.length; i++) {
       
        totalItems += cart[i][0]; 
        totalItems += cart[i][1]; 
    }
    return totalItems;
}
let totalOrderedItems = `<div class="row"><div> ${sumOrderedItems(cart)}`;

totalOrderedItems += ` Total </div> <div>${(finalPrice * 1000).toLocaleString()}</div></div>`

document.getElementById('ordered-menus').innerHTML = content;

document.getElementById('final-bill').innerHTML = final;

document.getElementById('final-total').innerHTML = totalOrderedItems;

document.getElementById('date').innerHTML = date;