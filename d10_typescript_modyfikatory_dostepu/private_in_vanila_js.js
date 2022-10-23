class Xyz {
    #history = [];

    addHistoryEntry(entry) {
        this.#history.push(entry);
    }

    #foobar() {

    }
}


const abc = new Xyz();
abc.#history