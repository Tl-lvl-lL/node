import http from 'http'
import fs from 'fs'
import qr from 'querystring'

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, cont) => {
            if (err) {
                console.log(err.code);
                console.log(err.message);
            } else {
                res.setHeader('content-type', 'text/html');
                res.write(cont)
                res.end()
            }
        })
    }
    else if (req.url === '/users') {
        if (req.method === 'GET') {
            res.setHeader('content-type', 'text/html');
            res.write("Get data")
            res.end()
        }
        else if (req.method === 'POST') {
            let data = ''
            req.on('data', (dt) => {
                data += dt
            })
            req.on('end', () => {
                let string = qr.parse(data)
                res.end("Method post Inicializate: " + string.name)
            })
        }
        else if (req.method === 'PUT') {
            let data = ''
            req.on('data', (dt) => {
                data += dt
            })
            req.on('end', () => {
                let string = qr.parse(data)
                res.end("Method post Inicializate: " + string.name)
            })
        }
        else if (req.method === 'DELETE') {
            let data = ''
            req.on('data', (dt) => {
                data += dt
            })
            req.on('end', () => {
                let string = qr.parse(data)
                res.end("Method post Inicializate: " + string.name)
            })
        } else {
            res.write("Error.name")
            res.end()
        }
    }
})
server.listen(8000);

