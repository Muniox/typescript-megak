/* Zadanie 1 */
const pricify = (price, currency = 'PLN', vat = 0.23) => {
    return `${(price + price * vat).toFixed(2)} ${currency}`;
};
console.log(pricify(10));
//# sourceMappingURL=zadanie1.js.map