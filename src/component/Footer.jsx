import React from 'react'
import img from '../Asessts/Image/logo-big-rentals-black-white 1.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    const icon_menu_style = {
        color: "var(--white-60, rgba(255, 255, 255, 0.60))",
        padding: '0px'
    }
    const icon_style = {
        backgroundColor: 'var(--neutral-90, #343434)',
        color: 'white',
        borderRadius: '50%',
        padding: '8px', // Optional: You can adjust padding as needed
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    }
    return (
        <>
            <div className='HA_footer_main'>
                <div className='HA_footer_main_child'>

                    <div className='HA_footer_main_child2'>
                        <div className='HA_footer_main_child2_child'>
                            <p className='HA_footer_main_child2_child_text'>Already Know What You Need?</p>
                        </div>
                        <div className='HA_footer_main_child2_child2'>
                            <button className='HA_footer_main_child2_child2_btn'>Contact US</button>
                            <button className='HA_footer_main_child2_child2_btn2'>Find a Equipment</button>
                        </div>
                    </div>
                    <div className='HA_footer_main_menu'>
                        <div className='HA_footer_main_menu_child'>
                            <img src={img} alt="" />
                            <p className='HA_footer_main_menu_child_text'>Bigrentals is California's leading big trailer leasing company.</p>
                            <div className='HA_footer_main_menu_child_icon_main'>
                                <FacebookIcon style={icon_style} />
                                <TwitterIcon style={icon_style} />
                                <LinkedInIcon style={icon_style} />
                                <InstagramIcon style={icon_style} />
                            </div>
                        </div>
                        <ul className='HA_footer_main_menu_child_menu'>
                            <li className='HA_footer_main_menu_child_menu_heading'>Navigations</li>
                            <li className='HA_footer_main_menu_child_menu_text'>Reservations</li>
                            <li className='HA_footer_main_menu_child_menu_text'>Locations</li>
                            <li className='HA_footer_main_menu_child_menu_text'>Questions</li>
                        </ul>
                        <ul className='HA_footer_main_menu_child_menu'>
                            <li className='HA_footer_main_menu_child_menu_heading'>Resources</li>
                            <li className='HA_footer_main_menu_child_menu_text'>Rentals Guide</li>
                            <li className='HA_footer_main_menu_child_menu_text'>Equipement Manuals</li>
                            <li className='HA_footer_main_menu_child_menu_text'>Case Studies</li>
                        </ul>
                        <ul className='HA_footer_main_menu_child_menu'>
                            <li className='HA_footer_main_menu_child_menu_heading'>Resources</li>
                            <li className='HA_footer_main_menu_child_menu_text'>
                                <Button style={icon_menu_style} startIcon={<MailOutlineIcon />}>
                                    support@roadmoto.com
                                </Button>
                            </li>
                            <li className='HA_footer_main_menu_child_menu_text'>
                                <Button style={icon_menu_style} startIcon={<CallIcon />}>
                                    (818) 740-4006
                                </Button>
                            </li>
                            <li className='HA_footer_main_menu_child_menu_text'>
                                <Button style={icon_menu_style} startIcon={<LocationOnIcon />}>
                                    Las Vegas, NV
                                </Button>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
            <div className='HA_footer_last_MAIN'>
                <div className='HA_footer_last_MAIN_child'>
                    <span style={{color: "var(--white-60, rgba(255, 255, 255, 0.60))"}}>Copyright © 2022 Bigrentals Holdings, Inc.</span>
                    <div>
                        <Button  style={{color: "var(--white-60, rgba(255, 255, 255, 0.60))"}}>Privacy Policy</Button>
                        <Button style={{color: "var(--white-60, rgba(255, 255, 255, 0.60))"}}>Terms of Service</Button>
                        <Button style={{color: "var(--white-60, rgba(255, 255, 255, 0.60))"}}>Sitemap</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
