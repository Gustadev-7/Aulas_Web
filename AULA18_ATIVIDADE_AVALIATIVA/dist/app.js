"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Produto_1 = require("./Produto");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000;
app.use(express_1.default.json());
const produtos = [];
function novoProduto(req, res) {
    try {
        let data = req.body;
        if (!data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer nome, preço e fabricante");
        }
        const produto = new Produto_1.Produto(data.id, data.nome, data.preco, data.fabricante);
        produtos.push(produto);
        res.status(200).json(produto);
    }
    catch (e) {
        res.status(400).json({ Message: e.message });
    }
}
function listarProdutos(req, res) {
    try {
        res.status(200).json({ Produtos: produtos });
    }
    catch (e) {
        res.status(500).json({ Message: "Erro interno da aplicação" });
    }
}
function listarProdutoPorID(req, res) {
    try {
        const id = Number(req.params.id);
        const buscaId = produtos.find((p) => p.id === id);
        if (!buscaId) {
            res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        res.status(200).json(buscaId);
    }
    catch (e) {
        res.status(500).json({ Message: "Erro interno da aplicação" });
    }
}
function atualizarProduto(req, res) {
    try {
        const id = Number(req.params.id);
        let data = req.body;
        const buscaId = produtos.findIndex((p) => p.id === id);
        if (buscaId === -1) {
            res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        produtos[buscaId] = { ...produtos[buscaId], ...data, id: id };
        res.status(200).json({
            Message: "Produto atualizado com sucesso",
            Produto: produtos[buscaId]
        });
    }
    catch (e) {
        res.status(500).json({ Message: "Erro interno da aplicação" });
    }
}
function excluirProduto(req, res) {
    try {
        const id = Number(req.params.id);
        const buscaId = produtos.findIndex((p) => p.id === id);
        if (buscaId === -1) {
            res.status(404).json({ mensagem: "Produto não encontrado" });
        }
        const produtoRemovido = produtos.splice(buscaId, 1);
        res.status(200).json({
            Message: "Produto removido com sucesso",
            Produto: produtoRemovido[0]
        });
    }
    catch (e) {
        res.status(500).json({ Message: "Erro interno da aplicação" });
    }
}
app.post('/api/product', novoProduto);
app.get('/api/product', listarProdutos);
app.get('/api/product/:id', listarProdutoPorID);
app.put('/api/product/:id', atualizarProduto);
app.delete('/api/product/:id', excluirProduto);
app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));
