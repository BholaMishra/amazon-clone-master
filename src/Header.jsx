import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasKetIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from './stateProvider';
import { auth } from "./firebase";

const Header = () => {
    const [{ basket, user }] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

      
    return (
        <div className='header'>
            <Link to="/">
                <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="..." />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput  " />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className="header_option">
                        <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.displayName}</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Return
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">

                    <div className="header_optionBasket">
                        <ShoppingBasKetIcon className="header_Basket" />
                        <span className="header_optionLineTwo header_basketCount">
                            {basket?.length}
                        </span>

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;