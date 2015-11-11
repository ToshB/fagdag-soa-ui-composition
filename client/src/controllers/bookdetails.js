import {createFactory, createClass, DOM} from 'react';
import Q from 'q';
import {detailsPage} from '../components/detailsPage';

export default function (salesApi, marketingApi) {
  return {
    getData({location}) {
      const bookId = parseInt(location.params.bookId, 10);
      return Q.all([
          salesApi.details(bookId),
          marketingApi.price(bookId)
        ])
        .spread(function (salesData, marketingData) {
          return {
            id: location.params.bookId,
            sales: salesData,
            marketing: marketingData
          };
        })
        .catch(e => {
          console.error(e);
        });
    },

    prepareData({pageData}) {
      console.log('data', pageData);
      return pageData;
    },

    render: createFactory(createClass({
      render() {
        return detailsPage(this.props);
      }
    }))
  };
}