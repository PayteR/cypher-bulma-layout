const mix = require('laravel-mix');

mix.copy('node_modules/bulma_scss/css/bulma.css', 'public/dist')
  .sass('scss/cypher-bulma-layout.scss', 'public/dist')
  .browserSync('http://127.0.0.1:19005');
