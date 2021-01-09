import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
           

            <div className="header__left">
            <img className='logo' src="https://lh3.googleusercontent.com/OeJ6zawjwTObwfmCMLbIt-mbY7nrd-8WfdsHe0Xv_3u85LL7XrvPax2LRTuFP8Si2A=rw" alt=''/>
            <input type='text' className='header__input'/>
            <SearchIcon className='search'/>
            </div>

            <div className="header__right">
                <div className="header__profile">
                <Avatar src='https://www.gstatic.com/tv/thumb/persons/90028/90028_v9_bb.jpg'/>
                
                <p>Akshay</p>
                </div>

                <div className="basket">
                <ShoppingBasketIcon/>
                <p> <span>0</span> Items</p>
                </div>
                

            </div>

          


            

            
        </div>
    )
}

export default Header
