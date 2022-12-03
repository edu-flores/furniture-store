import { useState } from 'react';
import './Calculator.css';
import data from '../data.json';
import Item from './Item';

function Calculator() {

  // Get items from JSON
  const [items, setItems] = useState(data);

  return (
    <section className='calculator'>
      {items.map(item => (
        <Item
          key={item.id}
          image={require(`../images/${item.image}`)} 
          name={item.name}
          quantity={item.quantity}
        />
      ))}
    </section>
  );
}

export default Calculator;
