import './Item.css';

function Item(props) {
  return (
    <div className="item">
      <img className="item--image" src={props.image} alt={props.name} />
      <p className="item--text">{props.name}</p>
    </div>
  );
}

export default Item;
