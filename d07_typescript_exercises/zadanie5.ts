//Uzupełnij typy - w jaki sposób możesz to zrobić?
//Czy musisz coś jeszcze modyfikować?

interface OneProduct {
    name: string;
    count: number;
    isDegradable: boolean;
}


const product: OneProduct = {
    name: 'Opakowanie zbiorcze',
    count: 1000,
    isDegradable: true,
};

// function getProductProp(obj: OneProduct, propName: 'name' | 'count' | 'isDegradable'): string | number | boolean {
//     return obj[propName];
// }

function getProductProp(obj: OneProduct, propName: keyof OneProduct): string | number | boolean {
    return obj[propName];
}

// const count = Number(getProductProp(product, 'count'));
const count = Number(getProductProp(product, 'count')) as Number
const degraded = getProductProp(product, 'isDegradable') as boolean
console.log(`${count.toFixed(2)} ${degraded ? 'degraded' : 'undegraded'}`)