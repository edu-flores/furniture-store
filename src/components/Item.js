import './Item.css';

function Item(props) {
  return(
    <div className='item'>
      <img className='item--image' src={props.image} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default Item;
