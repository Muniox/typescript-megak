/**
 * Otypuj poniższy kod, następnie napisz pętlę, która będzie wypisywała wartość po kolei wszystkich elementów pojedynczo w konsoli.
 *
 * Spróbuj użyć różnych typów pętli. forEach, for...i, for...in, for...of
 *
 * Zwróć uwagę na, to jak edytor sprawnie podpowiada Ci w pracy.
 *
 * W kodzie jest błąd — powinno yo być widać i łatwo możesz go naprawić
 * */

interface Product {
    name: string;
    count: number;
    pricePerOne: number;
    vat: number;
}


function showItems(items: Product[]): void {
   //forEach
   //  items.forEach((el,index, ar) => {
   //      console.log((el.name, el.pricePerOne * el.count * ( 1 + el.vat / 100)).toFixed(2));
   //  });

    // for...i
    // for(let i=0;i<items.length;i++) {
    //     console.log((items[i].name, items[i].pricePerOne * items[i].count * ( 1 + items[i].vat / 100)).toFixed(2));
    // }

    // for...in
    // for (const key in items) {
    //     console.log((items[key].name , items[key].pricePerOne * items[key].count * ( 1 + items[key].vat / 100)).toFixed(2));
    // }

    // for...of
    // for (const item of items) {
    //     console.log((item.name, item.pricePerOne * item.count * ( 1 + item.vat / 100)).toFixed(2));
    // }
}

showItems([
    {
        name: 'Pomarańcze luz',
        count: 1.2,
        pricePerOne: 1,
        vat: 0,
    },
    {
        name: 'Opony komplet',
        count: 1,
        pricePerOne: 800,
        vat: 23,
    },
    {
        name: 'MP3 Player Manta 256MB',
        count: 1,
        pricePerOne: 75,
        vat: 23,
    },
    {
        name: 'Baton "Mega Kursowy Baton Masło Orzechowe"',
        count: 5,
        pricePerOne: 2,
        vat: 23,
    },
]);