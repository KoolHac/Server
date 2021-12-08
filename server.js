const obj = require("json-server")
const server = obj.create()
const host = obj.router("db.json")
var port = process.env.PORT|| 5500
server.use(host)
server.listen(port);