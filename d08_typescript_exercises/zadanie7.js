// 1. Dodaj typy do programu.
// 2. Usuń błędy w wyznaczonym miejscu.
// *3. Napisz interfejs, który będzie w całości opisywał klasę Bookmarks, a następnie zrób tak, żeby klasa Bookmarks implementowała ten interfejs.
var Bookmarks = /** @class */ (function () {
    function Bookmarks() {
        this.list = [];
    }
    Bookmarks.prototype.first = function () {
        return this.list[0];
    };
    Bookmarks.prototype.last = function () {
        return this.list[this.list.length - 1];
    };
    Bookmarks.prototype.add = function (url) {
        this.list.push(url);
    };
    Bookmarks.prototype.remove = function (urlOrAll) {
        if (urlOrAll === true) {
            this.list = [];
        }
        else {
            this.list = this.list.filter(function (bookmark) { return bookmark !== urlOrAll; });
        }
    };
    return Bookmarks;
}());
// Poniższy kod możesz zmieniać - tak, aby miał typy, sens i nie wywalał błędów :)
var favorites = new Bookmarks();
function createLink(bookmark) {
    if (!bookmark) {
        return;
    }
    else {
        var short = bookmark.split('//')[1];
        return "<a href=\"".concat(bookmark, "\">").concat(short, "</a>");
    }
}
function showFirstLink() {
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
