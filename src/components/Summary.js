import './Summary.css';

function Summary(props) {

  // Summary results
  const { results } = props;

  return (
    <div className="summary">
      <div className="summary--vars">
        <p>Total Items</p>
        <p>Total m&#178;</p>
        <p>Subtotal</p>
        <p>Tax</p>
        <p><b>Total</b></p>
        <p><b>Due Today 50%</b></p>
      </div>
      <div className="summary--results">
        <p>{results.items}</p>
        <p>{Number((results.space).toFixed(2)).toLocaleString()}</p>
        <p>${Number((results.subtotal).toFixed(2)).toLocaleString()}</p>
        <p>${Number((results.tax).toFixed(2)).toLocaleString()}</p>
        <p><b>${Number((results.total).toFixed(2)).toLocaleString()}</b></p>
        <p><b>${Number((results.due).toFixed(2)).toLocaleString()}</b></p>
      </div>
    </div>
  );
}

export default Summary;
