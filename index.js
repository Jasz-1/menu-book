const menus = [{
  title: "Avocado Pesto Salad",
  photoUrl: "salad.png",
  description: "Home-grown vegetables with loads of avocado, topped with mouthwatering pesto salad",
  prices: [{
    label: "",
    price: 35
  }, {
    label: "+ Grilled Salmon",
    price: 55
  }]
}, {
  title: "Triple Cheese Pizza",
  photoUrl: "pizza.png",
  description: "Indulge yourself in this simple yet delicious delicacy",
  prices: [{
    label: "1 Slice",
    price: 15
  }, {
    label: "Pan (6 slices)",
    price: 60
  }]
}, {

  title: "Seasonal Wine",
  photoUrl: "wine.png",
  description: "A great meal becomes perfect when combined with a good wine",
  prices: [{
    label: "Glass",
    price: 100
  }, {
    label: "Bottle",
    price: 1500
  }]
}, {

  title: "Coffee",
  photoUrl: "coffee.png",
  description: "The best coffee you can have from the land of Indonesia",
  prices: [{
    label: "Americano",
    price: 25
  }, {
    label: "Latte",
    price: 30
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

let menuPrices = "";
  for (let j = 0; j < e.prices.length; j++) {
    const f = e.prices[j];

    menuPrices += ` 
    <div class="menu-price-row">
      <span class="price-description">${f.label}</span>
      <div class="price-and-qty">
          <span class="price">${f.price}</span>
          <button type="button" onclick='substractQty(${e.menus},${f.menus})'>
              <img src="minus.png" width="16" height="16" alt="minus">
          </button>
          <span id="qty${i}${j}" class="qty">0</span>
          <button type="button" onclick='addQty(${i},${j})'>
              <img src="plus.png" width="16" height="16" alt="plus">
          </button>
      </div>
     
  </div>



  <div class="menu-price-row">
      <span class="price-description">${f.label}</span>
      <div class="price-and-qty">
      <span class="price">${f.price}</span>
      
      
          <button type="button" onclick='substractQty(${i},${j})'>
              <img src="minus.png" width="16" height="16" alt="minus">
          </button>
          <span id="qty${i}${j}" class="qty">0</span>
          <button type="button" onclick='addQty(${i},${j})'>
              <img src="plus.png" width="16" height="16" alt="plus">
          </button>
      </div>
  </div>
</div> 
`
  }
    menuArea += `
  <div class="menu-tile">
  <div class="menu-photo">
      <img src="${e.photoUrl}" alt="${e.title}">
  </div>
  <div class="menu-tile-name">${e.title}</div>
  <div class="menu-tile-description">${e.description} </div>
  ${menuPrices}
  </div>
`

  }


document.getElementById("menu-area").innerHTML = menuArea;


  function addQty(menuIndex, priceIndex) {
    cart[menuIndex][priceIndex] = cart[menuIndex][priceIndex] + 1
    document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
  }

  function substractQty(menuIndex, priceIndex) {
    cart[menuIndex][priceIndex] = cart[menuIndex][priceIndex] - 1
    document.getElementById("qty" + menuIndex + priceIndex).innerHTML = cart[menuIndex][priceIndex];
  }