import {createFactory, createClass, DOM} from 'react';
const {h1} = DOM;

export default function () {
  return {
    render: createFactory(createClass({
      render() {
        return h1({}, 'Hi there');
      }
    }))
  };
}