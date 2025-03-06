const menus = [{
    title : "Avocado Pesto Salad",
    photoUrl  : "salad.png",
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
    photoUrl  : "pizza.png",
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
    photoUrl  : "wine.png",
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
    photoUrl  : "coffee.png",
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

let menuArea = "";
for (let i = 0; i < menus.length; i++) {
  const e = menus[i];

  menuArea += `
  <div class="menu-tile">
  <div class="menu-photo">
      <img src="${e.photoUrl}" alt="${e.title}">
  </div>
  <div class="menu-tile-name">${e.title}</div>
  <div class="menu-tile-description">${e.description} </div>



  <div class="menu-price-row">
      <span class="price-description"></span>
      <div class="price-and-qty">
          <span class="price">35</span>
          <button type="button" onclick='substractQty(0,0)'>
              <img src="minus.png" width="16" height="16" alt="minus">
          </button>
          <span id="qty00" class="qty">0</span>
          <button type="button" onclick='addQty(0,0)'>
              <img src="plus.png" width="16" height="16" alt="plus">
          </button>
      </div>
     
  </div>



  <div class="menu-price-row">
      <span class="price-description">+ Grilled Salmon</span>
      <div class="price-and-qty">
      <span class="price">55</span>
      
      
          <button type="button" onclick='substractQty(0,1)'>
              <img src="minus.png" width="16" height="16" alt="minus">
          </button>
          <span id="qty01" class="qty">0</span>
          <button type="button" onclick='addQty(0,1)'>
              <img src="plus.png" width="16" height="16" alt="plus">
          </button>
      </div>
  </div>
</div> `

}

function addQty(menuIndex, priceIndex) {
cart[menuIndex][priceIndex]=cart[menuIndex][priceIndex] + 1
  document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}

function substractQty(menuIndex, priceIndex) {
  cart[menuIndex][priceIndex]=cart[menuIndex][priceIndex] - 1
  document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
}