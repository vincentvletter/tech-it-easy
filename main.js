// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// Opdracht 1.


// 1.a
const tvName = inventory.map((tv) => tv.name);
console.log(tvName);


// 1.b
function soldOut(list) {
    return list.filter((sold) => sold.originalStock === sold.sold);
}

console.log(soldOut(inventory));


// 1.c
function hasAmbiLight(list) {
    return list.filter((inventory) => inventory.options.ambiLight);
}

console.log(hasAmbiLight(inventory));


// 1.c
function lowestToHighestPrice(list) {
    return list.sort((a, b) => a.price - b.price);
}


// Opdracht 2.


// 2.a
let totalSum = 0;

for (let i = 0; i < inventory.length; i++) {
    totalSum += inventory[i].sold;
}


// 2.b
const soldTvs = document.getElementById("sold-tv's");

const soldTvsTitle = document.createElement("h3");
soldTvsTitle.textContent = "Aantal verkochte tv's"

const allSoldTvs = document.createElement("h4");
allSoldTvs.textContent = totalSum;

soldTvs.appendChild(soldTvsTitle);
soldTvs.appendChild(allSoldTvs);


// 2.c
let totalOriginalStock = 0;

for (let i = 0; i < inventory.length; i++) {
    totalOriginalStock += inventory[i].originalStock;
}


// 2.d
console.log(totalOriginalStock);

const originalStock = document.getElementById("sum-of-tv's-bought");

const originalStockTitle = document.createElement("h3");
originalStockTitle.textContent = "aantal tv's ingekocht";

const allOriginalStock = document.createElement("h4");
allOriginalStock.textContent = totalOriginalStock;

originalStock.appendChild(originalStockTitle);
originalStock.appendChild(allOriginalStock);


// 2.e
const amountLeftToSell = totalOriginalStock - totalSum;

const amountOfTVsToSell = document.getElementById("tv's-left-to-sale");

const amountLeftToSellTitle = document.createElement("h3");
amountLeftToSellTitle.textContent = "aantal tv's nog te verkopen";

const allAmountLeftToSell = document.createElement("h4");
allAmountLeftToSell.textContent = amountLeftToSell;

amountOfTVsToSell.appendChild(amountLeftToSellTitle);
amountOfTVsToSell.appendChild(allAmountLeftToSell);


// Opdracht 3.

function printList(list) {
    const megaList = document.getElementById("tv-brand-names");

    list.map((listTv) => {
        const newList = document.createElement("li");
        newList.textContent = listTv.brand;

        megaList.appendChild(newList);
    })
}

printList(inventory);


// Opdracht 4.


// 4.a
function formatTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

// 4.b
function priceTv(tv) {
    return `€${tv.price},-`;
}

// 4.c
function sizeTv(tv) {
    // let sizes = "";
    // for (let i = 0; i < tv.availableSizes.length; i++) {
    //     if (i < tv.availableSizes.length - 1) {
    //         sizes = sizes + `${tv.availableSizes[i]} inch (${Math.floor(tv.availableSizes[i] * 2.54)} cm) | `;
    //     } else {
    //         sizes = sizes + `${tv.availableSizes[i]} inch (${Math.floor(tv.availableSizes[i] * 2.54)} cm)`;
    //     }
    // }
    // return sizes;
    return tv.availableSizes.map(size => `${size} inch (${Math.floor(size * 2.54)} cm)`).join(" | ");
}


// 4.d
function formatTv(tv) {
    const formatTvInfo = `${formatTvName(tv)}\n${priceTv(tv)}\n${sizeTv(tv)}\n\n`;
    return formatTvInfo;
}

// 4.e

const showAllTvs = document.getElementById("tv");

function displayAllTvs(listTvs) {
    showAllTvs.textContent = listTvs.map((tv) => {
        return formatTv(tv);
    })
}

displayAllTvs(inventory);

//  Bonus Opdracht.
const sortTVByPrice = document.getElementById("sort-price");
sortTVByPrice.addEventListener("click", sortOnPrice);

const sortTvList = document.createElement("button");
sortTvList.textContent = "Sorteer op prijs";

sortTVByPrice.appendChild(sortTvList);

function sortOnPrice() {
    displayAllTvs(lowestToHighestPrice(inventory));
}

const showTvsWithAmbiLight = document.getElementById("ambi-lights-tv's");
showTvsWithAmbiLight.addEventListener("click", getAmbiLightTvs);

const buttonAmbiLightTvs = document.createElement("button");
buttonAmbiLightTvs.textContent = "Sorteer op ambi light";

showTvsWithAmbiLight.appendChild(buttonAmbiLightTvs);

function getAmbiLightTvs() {
    displayAllTvs(hasAmbiLight(inventory));
}

const showSoldOutTvs = document.getElementById("sold-out-tv's");
showSoldOutTvs.addEventListener("click", getSoldOutTvs);

const buttonSoldOutTvs = document.createElement("button");
buttonSoldOutTvs.textContent = "Laat uitverkochte tv's zien";

showSoldOutTvs.appendChild(buttonSoldOutTvs);

function getSoldOutTvs() {
    displayAllTvs(soldOut(inventory));
}