import './Summary.css';

function Summary(props) {

  // Summary results
  const { results } = props;

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
        <p>{results.items}</p>
        <p>{results.space}</p>
        <p>{results.subtotal}</p>
        <p>${results.tax}</p>
        <p><b>${results.total}</b></p>
        <p><b>${results.due}</b></p>
      </div>
    </div>
  );
}

export default Summary;
