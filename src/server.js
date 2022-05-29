const express = require('express');
const app = express();
const http = require('http');

const PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (_, res) => res.render('index.html'));
app.get('/*', (_, res) => res.redirect('/'));

http.createServer((req, res) => {
    res.writeHead(302, { Location: 'http://ec2-13-209-205-152.ap-northeast-2.compute.amazonaws.com' });
    res.end();
}).listen(PORT, console.log('http://localhost:3000'));
