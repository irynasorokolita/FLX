
    let price = parseFloat(prompt('Input amount of money'));
    let discount = parseFloat(prompt('Input discount'));
    if (price >= 0 && price <= 9999999 && discount >= 0 && discount <= 99) {
        let priceWithDiscount = price * (100 - discount) / 100;
        let saved = price - priceWithDiscount;
        alert('Price without discount: ' + +price.toFixed(2) +
        '\nDiscount: ' + +discount.toFixed(2) + '%' +
        '\nPrice with discount: ' + +priceWithDiscount.toFixed(2) +
        '\nSaved: ' + +saved.toFixed(2));
    } else {
        alert('Invalid data');
    }
