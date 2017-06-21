import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from '../../components/CartItem';

const title = 'Product 1'
const description = 'Product Description'
const priceInCents = 10000
const onRemove = () => true
const onMouseIn = () => true
const onMouseOut = () => true
const props = {title, description, priceInCents, onRemove, onMouseIn, onMouseOut}
const div = document.createElement('div');

it('renders without crashing', () => {
  ReactDOM.render(React.createElement(CartItem, props), div);
});
