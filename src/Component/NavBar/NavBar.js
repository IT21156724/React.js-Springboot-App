/*import React, { Component } from 'react';
import './NavBar.css';
import ShapeBuddyLogo from '../../images/ShapeBuddyLogo.jpg';
import Dp1 from '../../images/dp1.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-left">
                    <img className="navbar_logo" src={ShapeBuddyLogo} alt="Logo" width="40px" />
                    <input className="navbar_search" type="text" placeholder="Looking for..." />
                </div>
                
                <div className="navbar-center"></div>
                
                <div className="navbar-right">
                    <img className="navbar_logo" src={Dp1} alt="dp1" width="35px" />
                    <div className='navbar_profilename'>Prajila</div>
                    <button className='logout_button'>Logout</button>
                </div>
                
            </div>
        );
    }
}

export default NavBar;*/


import React, { useState } from 'react';
import './NavBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/App_logo_NoBgNav.png';
import userImage from '../../images/Usericonnav.png';
import userHome from '../../images/homeiconnav.png';
import userSchedule from '../../images/schedule.png';
import userPlan from '../../images/gymplan.png';
import userStatus from '../../images/status.png';
import userMeal from '../../images/mealplan.png';



library.add(faBars);

const NavBar = () => {
    return (
    <header className='header'> 
        <div className="container">
            <div className="nav_wrapper">

                <div className="logo">
                    <div className="logo_img">
                        <img src={logo} alt="Shape Buddy"/>
                    </div>
                    <h2>Shape Buddy</h2>
                </div>

                

                {/* nav right */}

                <div className="nav_right">
                <a href="/home">
                    <img src={userHome} alt="User" className="user_image" />
                </a>
                <a href="/profile">
                    <img src={userSchedule} alt="User" className="user_image" />
                </a>
                <a href="/profile">
                    <img src={userPlan} alt="User" className="user_image" />
                </a>
                <a href="/profile">
                    <img src={userStatus} alt="User" className="user_image" />
                </a>
                <a href="/profile">
                    <img src={userMeal} alt="User" className="user_image" />
                </a>
                <a href="/profile">
                    <img src={userImage} alt="User" className="user_image" />
                </a>
                
                    {/* <button className="register_btn">Register</button>
                    <span className="mobile_menu">
                        <i className="fas fa-bars"></i>
                    </span> */}
                </div>
            </div>
        </div>
    </header>
    );

};

export default NavBar;