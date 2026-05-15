"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    static instance;
    productList = [];
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductRepository();
        }
        return this.instance;
    }
    insereProduto(product) {
        this.productList.push(product);
    }
    filtrarProdutoPorId(id) {
        return this.productList.find(product => product.id === id);
    }
    filtrarTodosProdutos() {
        return this.productList;
    }
}
exports.ProductRepository = ProductRepository;
