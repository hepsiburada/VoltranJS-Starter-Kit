const path = require('path');

const ROUTE_PATHS = require('./routeConstants').default;

const ROUTE_CONFIG_TO_COMPONENT_DICT = [
  {path: path.resolve(__dirname, '../partials/HelloWorld/HelloWorld'), routePath: ROUTE_PATHS.HELLO_WORLD},
];

module.exports = ROUTE_CONFIG_TO_COMPONENT_DICT;
