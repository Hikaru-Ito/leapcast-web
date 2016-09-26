var Metalsmith  = require('metalsmith')
var markdown    = require('metalsmith-markdown')
var layouts     = require('metalsmith-layouts')
var permalinks  = require('metalsmith-permalinks')

Metalsmith(__dirname)
  .metadata({
    title: "Leapcast",
    description: "DesignEngineering Studio",
    generator: "Metalsmith",
    url: "https://leapcast.jp/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
