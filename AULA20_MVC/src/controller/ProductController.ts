import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";
const productService = new ProductService();

export function cadastrarProduto (req: Request, res: Response) {
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json(
            {
                mensagem:"Produto adicionado com sucesso!",
                produto: novoProduto
            }
        );
    } catch(error: any) {
        res.status(400).json({message: error.message});
    }
};

export function pesquisarProdutoporId (req: Request, res: Response) {
    try {
        let id = req.query.id;
        const buscaId = productService.consultarProduto(id);
        res.status(201).json(
            {
                mensgem:"Produto encontrado com sucesso!",
                produto: buscaId
            }
        )
    } catch(error: any) {
        res.status(400).json({message: error.message});
    } 
}

export function listaProdutos (req: Request, res: Response) {
    try {
        const produtos = productService.getProducts();
        res.status(201).json(
            {
                mensgem:"Produtos encontrados com sucesso!",
                produto: produtos
            }
        )
    } catch(error: any) {
        res.status(400).json({message: error.message});
    } 
}
