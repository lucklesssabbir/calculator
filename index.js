const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3012;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/exportHistory', (req, res) => {
  const { history } = req.body;

  if (!history || history.length === 0) {
    return res.status(400).json({ message: 'No history to export.' });
  }

  const fileContent = history.join('\n');

  const filePath = path.join(__dirname, 'exports', 'history.txt');

  if (!fs.existsSync(path.join(__dirname, 'exports'))) {
    fs.mkdirSync(path.join(__dirname, 'exports'));
  }

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).json({ message: 'Failed to export history.' });
    }

    res.download(filePath, 'history.txt', (err) => {
      if (err) {
        console.error('Download error:', err);
        res.status(500).json({ message: 'Error downloading file.' });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
