// http, url

const http_mod = require("http");
const url = require("url");

let server = http_mod.createServer((req, res) => {
    res.writeHead(405,{'content-type' : 'text/html'});
    let q = url.parse(req.url,true).query;
    let txt = q.year + " " + q.month;
    res.end(txt);
 });

 server.listen(3001);

