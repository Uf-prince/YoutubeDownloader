const express = require('express');

const path = require('path');

const { Download, GetPlaylist, DownloadPlaylist } = require("./API");



const app = express();



app.use(express.static(__dirname + '/src'));

app.use(require('body-parser').json());

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  
    res.send('YouTube Downloader API is running.');
  
});



app.post('/youtube', (req, res) => {
  
    const url = req.body.url;
  
    if (!url) {
      
        return res.status(400).json({ error: 'No url provided' });
      
    }
  
    Download(url, res);
  
});



// For easier testing via browser or simple GET

app.get('/download', (req, res) => {
  
    const url = req.query.url;
  
    if (!url) {
      
        return res.status(400).json({ error: 'No url provided' });
      
    }
  
    Download(url, res);
  
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  
    console.log(`Server started on port ${PORT}`);
  
});

















