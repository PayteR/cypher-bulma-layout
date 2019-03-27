const mix = require('laravel-mix');

mix.copy('node_modules/bulma_scss/css/bulma.css', 'dist')
  .sass('scss/cypher-bulma-layout.scss', 'dist')
  .setPublicPath('dist');
