import {createFactory, createClass, DOM} from 'react';
import {assign} from 'lodash';
const {div, h1} = DOM;
import {bookList} from '@toshb/soaui-sales/components';

export default function (salesApi) {
  return {
    getData() {
      return salesApi.loadBooks()
        .then(function (books) {
          return {
            books: books
          };
        });
    },

    prepareData({pageData}) {
      const books = pageData.books.map(book => {
        return assign({link: `/books/${book.id}`}, book);
      });
      return {books};
    },

    render: createFactory(createClass({
      render() {
        return div({},
          h1({}, 'My Book Store'),
          bookList({books: this.props.books})
        );
      }
    }))
  };
}