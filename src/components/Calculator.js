import './Calculator.css';
import Item from './Item';
import Controller from './Controller';

function Calculator(props) {

  // Get items from JSON
  const { items, changeQuantity, clearInputs } = props;

  return (
    <section className="calculator lg:p">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-5 lg:px-12 md:justify-center mb-10">
        {items.map((item, index) => (
          <div className="calculator--container" key={item.id}>
            <Item
              image={require(`../images/${item.image}`)} 
              name={item.name}
            />
            <Controller
              index={index}
              items={items}
              changeQuantity={changeQuantity}
            />
          </div>
        ))}
      </div>
      <button className="calculator--clear" type="button" onClick={clearInputs}>Clear</button>
    </section>
  );
}

export default Calculator;
