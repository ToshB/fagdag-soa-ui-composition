/*jshint node: true*/
import {createServer} from 'http';
import express from 'express';
import expressStatic from 'express-static';
import path from 'path';

export default function () {
  const app = express();
  const index = path.resolve(__dirname + '../../../public/index.html');

  app.get(['/', '/books', '/books/*'], function(req, res){
    res.sendFile(index);
  });

  app.use(expressStatic(`${__dirname}/../../public/`));

  return createServer(app);
}
