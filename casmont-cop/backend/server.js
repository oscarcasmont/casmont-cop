const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.get('/estado', (req, res) => {
  const estado = `CPU OK · RAM OK · Uptime ${process.uptime().toFixed(0)}s`;
  res.json({ estado });
});

app.listen(port, () => {
  console.log(`Macroportal CASMONT·COP ∞ activo en http://localhost:${port}`);
});
