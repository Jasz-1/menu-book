const menus = [{
    title : "Avocado Pesto Salad",
    photoUrl  : "https://www.google.com",
    description : "Home-grown vegetables with loads of avocado, topped with mouthwatering pesto salad",
    prices  : [{
    label : "",
    price : 35
    },{
    label : "+ Grilled Salmon",
    price : 55
    }]
  },{
    title : "Triple Cheese Pizza",
    photoUrl  : "https://www.google.com",
    description : "Indulge yourself in this simple yet delicious delicacy",
    prices  : [{
    label : "1 Slice",
    price : 15
    },{
    label : "Pan (6 slices)",
    price : 60
    }]
  },{

    title : "Seasonal Wine",
    photoUrl  : "https://www.google.com",
    description : "A great meal becomes perfect when combined with a good wine",
    prices  : [{
    label : "Glass",
    price : 100
    },{
    label : "Bottle",
    price : 1500
    }]
  },{

    title : "Coffee",
    photoUrl  : "https://www.google.com",
    description : "The best coffee you can have from the land of Indonesia",
    prices  : [{
    label : "Americano",
    price : 25
    },{
    label : "Latte",
    price : 30
    }]
  }];

const cart = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
];

function addQty(menuIndex, priceIndex) {
cart[menuIndex][priceIndex]=cart[menuIndex][priceIndex] + 1
  document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}

function substractQty(menuIndex, priceIndex) {
  cart[menuIndex][priceIndex]=cart[menuIndex][priceIndex] - 1
  document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}