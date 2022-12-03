import './Summary.css';

function Summary() {
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
        <p>12</p>
        <p>8.55</p>
        <p>$1710</p>
        <p>$273.5</p>
        <p><b>$1,323</b></p>
        <p><b>$991.8</b></p>
      </div>
    </div>
  );
}

export default Summary;
