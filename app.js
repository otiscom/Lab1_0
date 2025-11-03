const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(33333);





/*

// włączamy moduły http i express
const http = require('http');
const express = require('express');

//middleware do obsługi danych przesyłanych metodą POST
app.use(express.urlencoded({ extended: false }));

const app = express();

//wywołujemy po kolei dwa middleware, 
//jeżeli tak jest koniecznie jest użycie next()

//Definiowanie adresó docelowych (routingu)
app.use('/info', (req, res, next) => {
    res.send('<h1>We are now at the \"Information\" page.</h1>');
});
/*
//res oznacza odpowiedź wysyłaną do klienta
app.use('/', (req, res, next) => {
    console.log('Second middleware.');
    res.send('<h1>Back-end programming, lab 1, Hello from NODE & Express.js!</h1>');
});

//routing: przesłanie żądania metodą post
app.use('/add-product', (req, res, next) => {
    res.send('<h1>Insert product name</h1>'+
    '<form action="/product" method="POST">'+
    '<input type="text" name="title">'+
    '<button type="submit">Send product name</button>'+
    '</form>');
} );



app.post('/product', (req, res, next) => {
    console.log('Received data: ', req.body);
    res.redirect('/');
});

//routing: odbiór żądania metodą post
   

// tworzymy obiekt serwera HTTP i uruchamiamy go na porcie 33333

// Start serwera z obiektu express.js
//const server = http.createServer(app);
app.listen(33333);
//server.listen(33333);

/* Response:
HTTP/1.1 304 Not Modified
X-Powered-By: Express
ETag: W/"43-oTlBDLtTiAjafsD/Kwgs341c0cs"
Date: Mon, 03 Nov 2025 09:50:34 GMT
Connection: keep-alive
Keep-Alive: timeout=5
*/

/* Request:

GET / HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*;q=0.8,application/signed-exchange;v=b3;q=0.7
/*Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7
Cache-Control: max-age=0
Connection: keep-alive
Host: localhost:33333
If-None-Match: W/"43-oTlBDLtTiAjafsD/Kwgs341c0cs"
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36
sec-ch-ua: "Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
*/

