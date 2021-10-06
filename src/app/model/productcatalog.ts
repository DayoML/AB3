export class ProductCatalog {
    constructor(
        public ProductID: string,
        public Title: string,
        public Images: string[],

        public created: Date
    ) {}
}