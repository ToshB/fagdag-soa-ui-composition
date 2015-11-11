/*jshint node: true*/
import {readFileSync} from 'fs';
import createServer from './src/server';

if (require.main === module) {
  createServer().listen(9000, () => {
    console.log('Open me from http://localhost:9000');
  });
}
