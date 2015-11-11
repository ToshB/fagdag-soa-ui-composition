import {createFactory, createClass, DOM} from 'react';
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
      return pageData;
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