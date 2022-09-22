import Buyable from "../Items/Buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    totalPrice(): number {
        const list = this._items as Array<any>
        return list.reduce((previous, current) => {
            return previous.price + current.price;
        });
    }

    totalPriceWithDiscount(discount: number): number {
        return this.totalPrice() * (1 - discount/100);
    }

    delete(id: number): void {
        const item = this._items.filter(item => {
            return item.id === id;
        })
        this._items.splice(this._items.indexOf(item as any));
    }
}
