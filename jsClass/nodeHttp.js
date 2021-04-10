console.clear()
const http = require('http'),
    fs = require('fs'),
    server = http.createServer(onRequest)

server.listen(3000)

function onRequest (req,res){
    if(req.url === '/form'){
        fs.readFile('./public/src/html/form.html',(err,cont)=>{
            if(err){
                    if(err.code === 'ENOENT'){
                        res.setStatus = 404
                    }else{
                        res.setStatus = 500
                    }
            }else{
                res.setHeader('content-type','text/html')
                res.write(cont)
                res.end()
            }
        }) 
    }else if(req.url === '/'){
        fs.readFile('./public/index.html',(err,cont)=>{
            if(err){
                    if(err.code === 'ENOENT'){
                        res.setStatus = 404
                    }else{
                        res.setStatus = 500
                    }
            }else{
                res.setHeader('content-type','text/html')
                res.write(cont)
                res.end()
            }
        }) 
    }

}