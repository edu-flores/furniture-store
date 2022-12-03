import './Summary.css';

function Summary(props) {

  const { data } = props;

  return (
    <div className="summary">
      <div className="summary--vars">
        <p>Total Items</p>
        <p>Total M&#178;</p>
        <p>Subtotal</p>
        <p>Tax</p>
        <p><b>Total</b></p>
        <p><b>Due Today 50%</b></p>
      </div>
      <div className="summary--results">
        <p>{data.items}</p>
        <p>{data.space}</p>
        <p>{data.subtotal}</p>
        <p>${data.tax}</p>
        <p><b>${data.total}</b></p>
        <p><b>${data.due}</b></p>
      </div>
    </div>
  );
}

export default Summary;
