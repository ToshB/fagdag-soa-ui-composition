import {createFactory, createClass, DOM} from 'react';
import {bookList} from '@toshb/soaui-sales/components';
const {li, ul} = DOM;

const BookListItem = createFactory(createClass({
  render() {
    return li({}, this.props.name);
  }
}));

export const BookList = createFactory(createClass({
  render() {
    return bookList(this.props.books);
  }
}));