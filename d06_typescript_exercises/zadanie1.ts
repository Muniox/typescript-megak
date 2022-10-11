/* Zadanie 1 */
const pricify = (price :number, currency :string = 'PLN', vat: number = 0.23): string => {
    return `${(price + price * vat).toFixed(2)} ${currency}`
}
console.log(pricify(10));



