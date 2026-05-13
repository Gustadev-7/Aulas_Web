import express, { Request, Response } from "express"
import { Produto } from "./Produto";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

const produtos: Produto[] = [];

function novoProduto(req: Request, res: Response):void {
    try {
        let data: any = req.body;

        if(!data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer nome, preço e fabricante");
        }

        const produto = new Produto(data.id, data.nome, data.preco, data.fabricante);
        produtos.push(produto);
        
        res.status(200).json(produto);
    } catch (e:unknown) {
        res.status(400).json({ Message: (e as Error).message });
    }
}

function listarProdutos(req: Request, res: Response):void {
    try {
        res.status(200).json({ Produtos: produtos });
    } catch (e:unknown) {
        res.status(500).json({ Message: "Erro interno da aplicação" })
    }
}

function listarProdutoPorID(req: Request, res: Response):void {
    try {
        const id = Number(req.params.id);
        const buscaId = produtos.find((p) => p.id === id);
        if (!buscaId) {
            res.status(404).json({ mensagem: "Produto não encontrado" });
        }

        res.status(200).json(buscaId);
    } catch (e:unknown) {
        res.status(500).json({ Message: "Erro interno da aplicação" })
    }
}

function atualizarProduto(req: Request, res: Response):void {
    try {
        const id = Number(req.params.id);
        let data: any = req.body;
        const buscaId = produtos.findIndex((p) => p.id === id);
        if (buscaId === -1) {
            res.status(404).json({ mensagem: "Produto não encontrado" });
        }

        produtos[buscaId] = { ...produtos[buscaId],...data, id: id};

        res.status(200).json({
            Message: "Produto atualizado com sucesso",
            Produto: produtos[buscaId]
        });
    } catch (e:unknown) {
        res.status(500).json({ Message: "Erro interno da aplicação" })
    }
}

function excluirProduto(req: Request, res: Response):void {
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
    } catch (e:unknown) {
        res.status(500).json({ Message: "Erro interno da aplicação" })
    }
}

app.post('/api/product', novoProduto);
app.get('/api/product', listarProdutos);
app.get('/api/product/:id', listarProdutoPorID);
app.put('/api/product/:id', atualizarProduto);
app.delete('/api/product/:id', excluirProduto);

app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));
