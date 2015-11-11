import {createFactory, createClass, DOM} from 'react';
const {h1, a, div} = DOM;

export default function () {
  return {
    render: createFactory(createClass({
      render() {
        return div({},
          h1({}, 'Hi there'),
          a({href: '/books'}, 'All books')
        );
      }
    }))
  };
}