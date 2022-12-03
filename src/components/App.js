import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Summary from './Summary';
import Footer from './Footer';
import { useState } from 'react';

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

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1 className="main--header">What items to store?</h1>
        <p className="main--info">
          Select which items you wish to store before moving to your new home. We'll keep 'em safe!
        </p>
        <Calculator />
        <h2 className="main--summary">Summary</h2>
        <Summary data={results} setter={setResults} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
