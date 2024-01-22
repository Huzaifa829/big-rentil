import React, { useState } from 'react'
import '../css files/navbar.css';
import { Select, MenuItem, IconButton, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import LogoIMG from '../Asessts/Image/logo-big-rentals-black-white 1.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Navbar = () => {
    const [activeButton, setActiveButton] = useState('signup');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const getButtonStyles = (button) => ({
        backgroundColor: activeButton === button ? '#F6CC08' : '',
        // border: activeButton === button ? '1px solid black' : '',
        borderRadius: activeButton === button ? '50px' : '',
        color: activeButton === button ? 'black' : 'white',
    });
    const button_styling = {
        background: 'transparent',
        color: 'white',
    }
    const handleChange = (event) => {
        // Handle language change here
        console.log(event.target.value);
    };
    return (
        <div className='nav-main'>
            <div className='nav_part_1'>
                {/* selecter part start */}
                <div className='nav_selecter_main'>
                    <IconButton>
                        <LanguageIcon />
                    </IconButton>
                    <Select
                        className='nav_selecter_main'
                        variant="standard"
                        label="Language"
                        value="en"  // Set the default selected value
                        onChange={handleChange}
                        style={{ marginLeft: '8px', color: 'white' }}
                    >
                        <MenuItem value="en">EN</MenuItem>
                        <MenuItem value="es">ES</MenuItem>
                        {/* Add more languages as needed */}
                    </Select>
                </div>
                {/* selecter part end */}

                <div className='nav_part_1_button'>
                    <Button style={button_styling} endIcon={<HelpIcon />}>
                        Help
                    </Button>
                    <Button style={button_styling} endIcon={<LocationOnIcon />}>
                        Location
                    </Button>
                    <Button style={button_styling} endIcon={<PhoneCallbackIcon />}>
                        Contact
                    </Button>
                </div>


            </div>
            <div className='nav_part_2'>
                <div className='nav_part_2_leftSide'>
                    <img className='nav_part_2_leftSide_logo' src={LogoIMG} alt="" />
                    <div className='nav_part_2_leftSide_child'>
                    <a className='nav_part_2_text' href="#">Equipment</a>
                    <a className='nav_part_2_text' href="#">Service Areas</a>
                    <a className='nav_part_2_text' href="#">Rental Resources</a>
                    <a className='nav_part_2_text' href="#">About</a>
                    <a className='nav_part_2_text' href="#">Blog</a>
                    </div>
                </div>
                <div className='nav_part_2_rightSide'>
                    <AddShoppingCartIcon style={{color:'white'}}/>

                    <div>
                        <Button className='nav_part_2_rightSide_button' onClick={() => handleButtonClick('login')} style={getButtonStyles('login')}>
                            Log in
                        </Button>

                        <Button className='nav_part_2_rightSide_button' onClick={() => handleButtonClick('signup')} style={getButtonStyles('signup')}>
                            Sign Up
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
