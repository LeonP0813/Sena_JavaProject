import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";

import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar"> 
            <div className="Links">
                <Link to="/" style={{ color: 'white', marginRight: '20px' }}> Tienda</Link>
                <Link to="/cart"> 
                    <ShoppingCart size={80} style={{ color: 'white', marginRight: '20px' }} /> 
                </Link>
                <Link to="/login"> 
                    <AccountCircle size={80} style={{ color: 'white', marginRight: '20px' }} /> 
                </Link>
            </div>
        </div>
    );
};
