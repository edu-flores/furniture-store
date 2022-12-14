import './App.css';
import { useState } from 'react';
import Header from './Header';
import Calculator from './Calculator';
import Summary from './Summary';
import Footer from './Footer';
import data from '../data.json';

function App() {

  // Results data
  const arr = {
    'items': 0,
    'space': 0,
    'subtotal': 0,
    'tax': 0,
    'total': 0,
    'due': 0
  };
  const [results, setResults] = useState(arr);
  const [items, setItems] = useState(data);

  function updateSummary() {

    // Total items
    results.items = items.reduce((a, b) => {
      return a + b.quantity;
    }, 0);

    // Total M^2
    results.space = items.reduce((a, b) => {
      return a + b.quantity * b.space;
    }, 0);

    // Subtotal, tax, total, 50%
    results.subtotal = results.space * 200;
    results.tax = results.subtotal * 0.16;
    results.total = results.subtotal + results.tax;
    results.due = results.total * 0.5;
    
    setResults(results);
  }

  function clearInputs() {
    let temp = [...items];

    // Reset each quantity to 0
    temp.forEach(item => {
      item.quantity = 0;
    });

    setItems(temp);
    updateSummary();
  }

  function changeQuantity(e, index) {
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
      value = (!value || value < 0) ? 0 : value;
      value = (value > 50) ? 50 : value;
      temp[index].quantity = parseInt(value);
    }

    setItems(temp);
    updateSummary();
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1 className="main--header">What items to store?</h1>
        <p className="main--info">
          Select which items you wish to store before moving to your new home. We'll keep 'em safe!
        </p>
        <Calculator
          items={items}
          changeQuantity={changeQuantity}
          clearInputs={clearInputs}
        />
        <h2 className="main--summary text-2xl mb-10">Summary</h2>
        <Summary 
          results={results}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
