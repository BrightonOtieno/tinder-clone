import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';


function Header({backButton}) {
    // const history = useNavigate();
    console.log(backButton);


    return (
        <div className='header'>
            {backButton ? (
                <Link to={backButton}>
                    <IconButton>
                        <ArrowBackIcon  fontSize="large"  className="header__icon"/>
                    </IconButton>
                </Link>
                
            ):(
                <IconButton>
                    <PersonIcon  fontSize="large"  className="header__icon"/>
                </IconButton>
            )}
        

            <Link to="/">
                <img className='header__logo' src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder-logo" />
            </Link>
            


            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon fontSize="large"  className='header__icon'/>
                </IconButton>
            </Link>
            
            
            
        </div>
    );
}

export default Header;
