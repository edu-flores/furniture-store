import { useState } from 'react';
import './Calculator.css';
import data from '../data.json';
import Item from './Item';
import Controller from './Controller';

function Calculator() {

  // Get items from JSON
  const [items, setItems] = useState(data);

  function clearInputs() {
    let temp = [...items];

    temp.forEach(item => {
      item.quantity = 0;
    });

    setItems(temp);
  }

  return (
    <section className="calculator">
      {items.map((item, index) => (
        <div className="calculator--container" key={item.id}>
          <Item
            image={require(`../images/${item.image}`)} 
            name={item.name}
          />
          <Controller
            i={index}
            data={items}
            setter={setItems}
          />
        </div>
      ))}
      <button className="calculator--clear" type="button" onClick={clearInputs}>Clear</button>
    </section>
  );
}

export default Calculator;
