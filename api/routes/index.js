const glossaryApi = require('./glossary');
const mindMapApi = require('./mind-map');

module.exports = [{
  path: '/glossary',
  router: glossaryApi
},
{
  path: '/mind-map',
  router: mindMapApi
}]