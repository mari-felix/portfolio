
const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public'), {
    acceptRanges: true, // Permite solicitações de intervalo de bytes
    etag: false, // Desativa a geração de ETags para simplificar
    lastModified: false // Desativa o uso de datas de modificação
  }));
  
  // Rota básica para servir o arquivo index.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  // Inicia o servidor
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });