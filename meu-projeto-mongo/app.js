const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json()); // Middleware para interpretar JSON

// Conexão com o MongoDB (Substitua pela sua string de conexão)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/meu_banco';

mongoose.connect(mongoURI)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const Usuario = require('./models/Usuario');

// Rota para Criar um Usuário (POST)
app.post('/usuarios', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar usuário', erro: error.message });
  }
});

// Rota para Listar Usuários (GET)
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuários' });
  }
});

const criarJoao = async () => {
  try {
    const joao = new Usuario({
      nome: "João Silva",
      email: "joao.silva@email.com"
      // O MongoDB salvará como Date, que você pode formatar na exibição
    });

    await joao.save();
    console.log('Usuário João Silva criado com sucesso!');
    
    // Para exibir no formato de Salvador ao consultar:
    console.log("Horário de Salvador:", joao.criadoEm.toLocaleString("pt-BR", {
      timeZone: "America/Bahia"
    }));
  } catch (error) {
    console.error("Erro ao criar:", error.message);
  }
};