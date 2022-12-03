import './Controller.css';

function Controller() {
  return (
    <div className='controller'>
      <button className='controller--left' type='button'>
        -
      </button>
      <input className='controller--input' type='number' name='quantity' value='' />
      <button className='controller--right' type='button'>
        +
      </button>
    </div>
  );
}

export default Controller;
