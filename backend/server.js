const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Liste de posts
const postList = [
  { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
  { id: '2', titre: 'Deuxième post', contenu: 'détails deuxième post' },
  { id: '3', titre: 'Troisième post', contenu: 'détails troisième post' },
];

// API GET /postList
app.get('/postList', (req, res) => {
  res.json(postList);
});

// Lancer serveur
const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
