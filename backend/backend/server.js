import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let produtos = [
  { id: 1, nome: "Arroz 5kg", preco: 25.90 },
  { id: 2, nome: "Feijão 1kg", preco: 8.50 },
  { id: 3, nome: "Refrigerante 2L", preco: 7.00 }
];

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.post("/venda", (req, res) => {
  const { total } = req.body;

  res.json({
    mensagem: "Venda finalizada com sucesso!",
    total,
    pagamento: "QR Code gerado com sucesso (Fictício)"
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
