const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  criadoEm: { 
    type: Date, 
    // Gera a data atual no momento da inserção
    default: () => new Date() 
  }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);