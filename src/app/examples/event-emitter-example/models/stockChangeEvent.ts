export class StockChangeEvent{
    productId : string;
    updatedStock : number;

    constructor(productId : string, updatedStock : number) {
        this.productId = productId;
        this.updatedStock = updatedStock;
    }
}