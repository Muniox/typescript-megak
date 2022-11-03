import {Entries} from "../types/entries";

export const handlebarsHelpers = {
    findPrice: (entries: Entries, selectedItem: string): number => {
        const found = entries.find(el => el[0] === selectedItem);

        if (!found) {
            throw new Error(`Cannot find price of "${selectedItem}".`);
        }

        const [, price] = found;
        return price;
    },

    pricify: (price: number): string => price.toFixed(2),

    isNotInArray: <Type>(array: Type[], element: Type): boolean => !array.includes(element),

    isInArray: <Type>(array: Type[], element: Type): boolean => array.includes(element),
};


