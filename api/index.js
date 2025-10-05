// Vercel serverless function to serve static files
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  // Always serve index.html for any route
  const indexPath = path.join(__dirname, '..', 'index.html');

  try {
    const html = fs.readFileSync(indexPath, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(404).send('Page not found');
  }
};