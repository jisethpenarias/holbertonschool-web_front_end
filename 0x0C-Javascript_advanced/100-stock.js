let stock = {macbook: 2, iphone: 4};

function processPayment(itemName) {
    let itemNametmp = itemName.toLowerCase();
    stock[itemNametmp] = stock[itemNametmp] - 1;
    console.log("Payment is being processed for item " + itemName);
}
function processError(itemName) {
    console.log("No more " + itemName + " in stock");
    console.log("Payment is not being processed");
}
function processOrder(itemName, callbackPayment, callbackError) {
    console.log("Verifying the stock of " + itemName);
    if (stock[itemName.toLowerCase()] > 0) {
        callbackPayment(itemName);
    } else {
        callbackError(itemName);
    }
}

while (stock.macbook > 0 || stock.iphone > 0) {
    let disp = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
    processOrder(disp, processPayment, processError);
}
alert("All items are sold out");