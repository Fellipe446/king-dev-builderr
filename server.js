const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (CSS, Imagens se houver)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que entrega o Editor
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`King Dev Builder rodando na porta ${PORT}`);
});
