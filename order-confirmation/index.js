const params = new URLSearchParams(window.location.search);

const totalPrice = params.get('total-price');

document.getElementById("window").innerHTML = "Terimakasih atas pesanan anda : Rp " + (totalPrice*1000).toLocaleString();