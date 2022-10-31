export enum RestaurantEventName {
    Open = 'open',
    Close = 'close',
    TableCountUpdate = 'tableCountUpdate',
}

export type RestaurantEvent = (eventName: RestaurantEventName) => boolean;

export type RestaurantTablseCountChangeEvent = (eventName: RestaurantEventName.TableCountUpdate, incDec: number) => boolean;

export type RestaurantTablseCountChangeCallback = (incDec: number) => void;