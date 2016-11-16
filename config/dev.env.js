var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WS_LOCATION: 'ws://echo.websocket.org/',
  API_HOST: 'http://localhost:8099/'
})
