const argv = require('minimist')
const servers = require('./config/servers')
console.log(servers[process.env.npm_config_server])
console.log(argv(process.argv.slice(2)))