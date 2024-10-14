import './cards.css';
import icon from './../../images/icon.webp';

const Cards = () => {
  return (
    <div className='cards'>
      <div className='header'>
        <div className='status'>
          <span className='sale'>ON SALE</span>
          <span className='in-stock'>In stock</span>
        </div>
        <select className='quantity'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className='icon-area'>
        <img className="icon" src={icon} alt="Icon" />
      </div>
      <div className='title'>
        <span className='title-text'>Blue Partyhat</span>
      </div>
      <div className='price-area'>
        <span className='current-price'>$450.00</span>
        <span className='old-price'>$622.00</span>
      </div>
      <div className='description'>
        <span className='description-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</span>
      </div>
      <div className='btn-area'>
        <button className='btn details-btn'>Details</button>
        <button className='btn-add'>
          <span className="add-text">ADD</span>
          <span className="cart-icon">🛒</span>
        </button>
      </div>
    </div>
  );
};

export default Cards;
