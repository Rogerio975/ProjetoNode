const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello Great World!');
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.put('/', (req, res) => {
    res.send('Got a PUT request');
});

app.get('/', (req, res) => {
    res.send('Got a DELETE request');
});

app.get('/tarefas', (req, res) => {
      const tarefas = [
        { id: 1, nome: 'Fazer compras' },
        { id: 2, nome: 'Estudar para a prova' },
        { id: 3, nome: 'Limpar a casa' },
        { id: 4, nome: 'Preparar o jantar' },
        // ...
      ];
     res.json(tarefas);
    });