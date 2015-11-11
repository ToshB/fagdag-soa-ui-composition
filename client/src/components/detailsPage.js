import {createFactory, createClass, DOM} from 'react';
import {bookDetails} from '@toshb/soaui-sales/components';
import {priceDetails} from '@toshb/soaui-marketing/components';
const {div, h1} = DOM;

export const detailsPage = createFactory(createClass({
  render() {
    return div({},
      h1({}, `Details for book id ${this.props.id}`),
      bookDetails(this.props.sales),
      priceDetails(this.props.marketing)
    );
  }
}));

