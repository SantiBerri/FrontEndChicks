import './cards.css'
import icon from './../../images/icon.webp'
const Cards = () => {
    return(
        <div className='cards'>  
            <div className='number'>
                <span className='sale'>ON SALE</span>
                <span className='number'>1</span>
            </div>
            <div className='icon-area'>
                <img className="icon" src={icon} alt="Icon" />
            </div>
            <div className='title'>
                <span className='title-text'>Item</span>
            </div>
            <div className='price'>
                <span className='price-text'>$10.00</span>
            </div>
            <div className='description'>
                <span className='description-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className='btn-area'>
                <button className='btn'>Details</button>
                <button className='btn-add'>Add</button>
            </div>
        </div>
    )
}

export default Cards;