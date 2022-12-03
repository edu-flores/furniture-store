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
    // let _items, _space, _sub, _tax, _total, _due;

    results.items = items.reduce((a, b) => {
      return a + b.quantity;
    }, 0);
    
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
      value = (!value) ? 0 : value;
      value = (value < 0) ? 0 : value;
      value = (value > 50) ? 50 : value;
      temp[index].quantity = value;
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
        <h2 className="main--summary">Summary</h2>
        <Summary 
          results={results}
          updateSummary={updateSummary} 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
