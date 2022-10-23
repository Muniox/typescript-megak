// 1. Dodaj typy do programu.
// 2. Usuń błędy w wyznaczonym miejscu.
// *3. Napisz interfejs, który będzie w całości opisywał klasę Bookmarks, a następnie zrób tak, żeby klasa Bookmarks implementowała ten interfejs.

// Nie zmieniaj w klasie nic oprócz typów!
interface Favorites {
    list: string[];
    first(): string | undefined;
    last(): string | undefined;
    add(url: string): void;
    remove(urlOrAll: string | true): void;
}

class Bookmarks implements Favorites {
    list: string[];

    constructor() {
        this.list = [];
    }

    first() {
        return this.list[0];
    }

    last() {
        return this.list[this.list.length - 1];
    }

    add(url: string): void {
        this.list.push(url);
    }

    remove(urlOrAll: string | true): void {
        if (urlOrAll === true) {
            this.list = [];
        } else {
            this.list = this.list.filter(bookmark => bookmark !== urlOrAll)
        }
    }
}

// Poniższy kod możesz zmieniać - tak, aby miał typy, sens i nie wywalał błędów :)
const favorites = new Bookmarks();

function createLink(bookmark: string): string | void {
    if (!bookmark) {
        return
    } else {
        let short = bookmark.split('//')[1]
        return `<a href="${bookmark}">${short}</a>`;
    }
}

function showFirstLink(): string | void {
    return createLink(favorites.first()) ? createLink(favorites.first()) : 'The list is empty';
}


favorites.add('http://wp.pl');
console.log(showFirstLink());
favorites.remove('http://wp.pl');
console.log(showFirstLink());
favorites.add('http://wp.pl');
favorites.add('http://onet.pl');
favorites.remove(true); // This should remove all
console.log('This should be true if list is empty', !favorites.first());