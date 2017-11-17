const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  const SSR_GET = (_path, _param) => {
    server.get(`/${_path}/:${_param}`, (req, res) => {
      const actualPage = `/${_path}`;
      console.log(_param);
      const queryParams = { title: req.params[`${_param}`] };
      app.render(req, res, actualPage, queryParams);
    });
  };

  SSR_GET('post', 'id');
  // SSR_GET('user', 'name');

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });

})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
