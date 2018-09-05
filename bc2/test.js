var Ganache = require("ganache-core");
var server = Ganache.server();
server.listen(5566, console.log);