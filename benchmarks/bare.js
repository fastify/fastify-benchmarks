const server = require('http').createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ hello: 'world' }))
})

server.listen(3000)
