import React from 'react'
import './ItemCard.css';
import Button from '@material-ui/core/Button';

function ItemCard() {
    return (
        <div className='card'>
            {/* ~210*~385 should be the size of ard */}
            <h1>ItemCard</h1>
            <img className='card__img' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg' alt=''/>
            <div>
                <p>Brand</p>
                 <div className='details'>
                   <h5>Qty</h5><input type='text' />  
                   <Button onClick={() => { alert('clicked') }}>Click me</Button>
                 </div>
            </div>

        </div>
    )
}

export default ItemCard
