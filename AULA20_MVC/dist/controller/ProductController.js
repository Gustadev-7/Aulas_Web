"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarProduto = cadastrarProduto;
exports.pesquisarProdutoporId = pesquisarProdutoporId;
exports.listaProdutos = listaProdutos;
const ProductService_1 = require("../service/ProductService");
const productService = new ProductService_1.ProductService();
function cadastrarProduto(req, res) {
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            produto: novoProduto
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function pesquisarProdutoporId(req, res) {
    try {
        let id = req.query.id;
        const buscaId = productService.consultarProduto(id);
        res.status(201).json({
            mensgem: "Produto encontrado com sucesso!",
            produto: buscaId
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
function listaProdutos(req, res) {
    try {
        const produtos = productService.getProducts();
        res.status(201).json({
            mensgem: "Produtos encontrados com sucesso!",
            produto: produtos
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
