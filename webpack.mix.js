const mix = require('laravel-mix');
const path = require('path');

mix.copy('node_modules/bulma_scss/css/bulma.css', 'public/dist')
  .sass('scss/cypher-bulma-layout.scss', 'public/dist')
  .browserSync({
    proxy: 'http://127.0.0.1:19005',
    files: ["public/**/*", "scss/**/*"],
    watch: true
  });
