import './Controller.css';

function Controller(props) {

  // Get props
  const { index, items, changeQuantity } = props;

  return (
    <div className="controller">
      <button data-value="decrease" onClick={e => changeQuantity(e, index)} className="controller--left" type="button">-</button>
      <input
        className="controller--input"
        type="number"
        onChange={e => changeQuantity(e, index)}
        name="quantity"
        value={items[index].quantity}
      />
      <button data-value="increase" onClick={e => changeQuantity(e, index)} className="controller--right" type="button">+</button>
    </div>
  );
}

export default Controller;
