import './Controller.css';

function Controller(props) {

  // Get props
  const index = props.i;
  const items = props.data;
  const setItems = props.setter;

  function changeQuantity(e) {
    let temp = [...items];

    const type = e.currentTarget.getAttribute('data-value');
    if (type) {  // Buttons
      if (type === 'decrease') {
        temp[index].quantity--;
        temp[index].quantity = (temp[index].quantity < 0) ? 0 : temp[index].quantity;
      } else {
        temp[index].quantity++;
        temp[index].quantity = (temp[index].quantity > 50) ? 50 : temp[index].quantity;
      }
    } else {  // Input
      let { value } = e.target;
      value = (!value) ? 0 : value;
      value = (value < 0) ? 0 : value;
      value = (value > 50) ? 50 : value;
      temp[index].quantity = value;
    }

    setItems(temp);
  }

  return (
    <div className="controller">
      <button data-value="decrease" onClick={changeQuantity} className="controller--left" type="button">-</button>
      <input
        className="controller--input"
        type="number"
        onChange={changeQuantity}
        name="quantity"
        value={items[index].quantity}
      />
      <button data-value="increase" onClick={changeQuantity} className="controller--right" type="button">+</button>
    </div>
  );
}

export default Controller;
