import './Summary.css';

function Summary(props) {

  // Summary results
  const { results } = props;

  // Add comma and two decimals
  const formatNumber = num => Number((num).toFixed(2)).toLocaleString();

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
        <p>{formatNumber(results.space)}</p>
        <p>${formatNumber(results.subtotal)}</p>
        <p>${formatNumber(results.tax)}</p>
        <p><b>${formatNumber(results.total)}</b></p>
        <p><b>${formatNumber(results.due)}</b></p>
      </div>
    </div>
  );
}

export default Summary;
