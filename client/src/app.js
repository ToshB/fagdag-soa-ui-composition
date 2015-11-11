import {createApp} from 'spa-sm';

import salesApi from '@toshb/soaui-sales/api';
import marketingApi from '@toshb/soaui-marketing/api';

import home from './controllers/home';
import books from './controllers/books';
import bookDetails from './controllers/bookdetails';

export default function (render) {
  const app = createApp({render});

  app.addPage('index', '/', home());
  app.addPage('bookList', '/books', books(salesApi, marketingApi));
  app.addPage('bookDetails', '/books/:bookId', bookDetails(salesApi, marketingApi));

  return app;
}
