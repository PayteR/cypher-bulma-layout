const mix = require('laravel-mix');
const path = require('path');

mix.copy('node_modules/bulma_scss/css/bulma.css', 'public/dist')
  .sass('scss/_all.scss', 'public/dist')
  .browserSync({
    proxy: 'http://127.0.0.1:19001',
    files: ["public/**/*"],
    port: 19003,
    ui: {
      port: 19014
    },
    watch: true
  });
