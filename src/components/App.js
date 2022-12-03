import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Footer from './Footer';

function App() {
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
