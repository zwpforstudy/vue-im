var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // WS_LOCATION: 'ws://echo.websocket.org/',
  WS_LOCATION: 'ws://123.56.126.37:8099/websocket',
  API_HOST: 'http://123.56.126.37:8099/'
})
