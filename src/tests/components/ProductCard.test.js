import React from 'react';
import ReactDOM from 'react-dom';
import ProductCard from '../../components/ProductCard';

const title = 'Product 1'
const description = 'Product Description'
const priceInCents = 10000
const onAdd = () => true
const props = {title, description, priceInCents, onAdd}
const div = document.createElement('div');

it('renders without crashing', () => {
  ReactDOM.render(React.createElement(ProductCard, props), div);
});
