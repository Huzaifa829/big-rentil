import React, { useState } from 'react'
import Navbar from '../component/Navbar';
import '../App.css';
import { Box, Button, Slider, TextField } from '@mui/material';
import MapComponent from '../component/MapComponent';
// import { AccountCircle, } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import SerachBar from '../component/SerachBar';
import img1 from '../Asessts/Image/bg.png'
import img2 from '../Asessts/Image/Group 39651.png'
import img3 from '../Asessts/Image/switch (1) 1.png'
import img4 from '../Asessts/Image/Group png.png'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Footer from '../component/Footer';
import Table_HA from '../component/Table';
import FAQSection from '../component/FAQ';

const LandingPage = () => {
  const [value, setValue] = useState(1);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const calculatePrice = () => {
    return value * 39; // Assuming $39 per day
  };

  const button_styling = {
    padding: '15px 44px',
    background: '#F6CC08',
    borderRadius: '50px',
    fontWeight: '800',
    color: 'white',
    width: '266px'
  }

  const button_styling2 = {
    display: 'flex',
    justifyContent: "flex-start",
    padding: '15px 44px 15px 0px',
    background: 'transparent',
    borderRadius: '50px',
    fontWeight: '800',
    color: 'white',
    width: '266px'

  }
  const button_styling3 = {
    padding: '15px 44px',
    background: 'transparent',
    borderRadius: '7px',
    border:'1px solid white',
    fontWeight: '800',
    color: 'white',
    width: '366px'
  }
  return (
    <div className='HA_main_body'>
      <Navbar />
      <div className='HA_landing_part_1'>
        {/* HA_landing_part_1 left side start */}
        <div className='HA_landing_part1_leftSide'>
        <div className='HA_landing_part1_leftSide_child'>
        <p className='HA_landing_part1_leftSide_heding HA_font_family'>Rent it with Big Rentals </p>
        <p className='HA_landing_part1_leftSide_para HA_font_family'>You could earn</p>
        <p className='HA_landing_part1_leftSide_price HA_font_family'><span>${calculatePrice()}</span></p>
        <p className='HA_landing_part1_leftSide_Day HA_font_family'><span>{value} Day</span> at an estimated  $39 a day</p>
        <Slider
          value={value}
          onChange={handleChange}
          defaultValue={1}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={30}
          style={{ color: '#FFEB3B', height: 8 }} // Yellow color and height
        />
      </div>
          {/* <div className='HA_landing_part1_leftSide_child'>
            <p className='HA_landing_part1_leftSide_heding HA_font_family'>Rent it with Big Rentals </p>
            <p className='HA_landing_part1_leftSide_para HA_font_family'>You could earn</p>
            <p className='HA_landing_part1_leftSide_price HA_font_family'><span>$</span>39</p>
            <p className='HA_landing_part1_leftSide_Day HA_font_family'><span>1 Day</span> at an estimated $39 a day</p>
            <Slider
              value={value}
              onChange={handleChange}
              defaultValue={1}
              aria-label="Default"
              valueLabelDisplay="auto"
              max={30}
              style={{ color: '#FFEB3B', height: 8 }} // Yellow color and height
            />
          </div> */}
          <a style={{ color: 'gray', marginBottom: '18px' }} href="">Learn how we estimate your earnings</a>
          <SerachBar />
          <Button style={button_styling}>
            Get Started
          </Button>
        </div>
        {/* HA_landing_part_1 left side end */}

        <div className='HA_landing_part1_rightSide'>
          <MapComponent/>
        </div>

      </div>
      <div className='HA_landing_part_2'>
        <p className='HA_landing_part_2_text HA_font_family'>Rent it easily with Big Rentals</p>
        <img style={{width:"100%"}} src={img1} alt="" />

      </div>
      <div className='HA_landing_part_3'>
        <div className='HA_font_family' style={{ width: '350px' }}>
          <p style={{ color: 'black', fontWeight: '800', }}>Personalized Guidance from a Trailer Expert</p>
          <p style={{ color: '#717171', fontWeight: '300', }}>We'll connect you with a seasoned expert in trailer rental in your region. They will assist you from your initial inquiry to your first rental, whether it's through phone, video call, or chat.</p>
        </div>
        <div className='HA_font_family' style={{ width: '350px' }}>
          <p style={{ color: 'black', fontWeight: '800', }}>Personalized Guidance from a Trailer Expert</p>
          <p style={{ color: '#717171', fontWeight: '300', }}>We'll connect you with a seasoned expert in trailer rental in your region. They will assist you from your initial inquiry to your first rental, whether it's through phone, video call, or chat.</p>
        </div>
        <div className='HA_font_family' style={{ width: '350px' }}>
          <p style={{ color: 'black', fontWeight: '800', }}>Personalized Guidance from a Trailer Expert</p>
          <p style={{ color: '#717171', fontWeight: '300', }}>We'll connect you with a seasoned expert in trailer rental in your region. They will assist you from your initial inquiry to your first rental, whether it's through phone, video call, or chat.</p>
        </div>
      </div>
      <div className='HA_landing_part_4'>
        <div className='HA_landing_part_4_child'>
          <p className='HA_landing_part_4_heading'>Increase your utilization. Earn
            revenue doing it</p>
          <p className='HA_landing_part_4_para'>Get your idle machines rented by contractors
            who need them. Always risk-free to you, we only get paid when your gear
            is rented.</p>
          <Button style={button_styling}>
            Get Started
          </Button>
          <Button style={button_styling2} startIcon={<PlayCircleOutlineIcon style={{ fontSize: '50px', color: '#F6CC08' }} />}>
            Delete
          </Button>
        </div>
      </div>
      <div className='HA_landing_part_5'>
        <div className='HA_landing_part_5_Leftside'>
          <p className='HA_landing_part_5_Leftside_heading'>Always in Control</p>
          <p className='HA_landing_part_5_Leftside_para'>Your fleet dashboard gives you visibility into every aspect of your ranted gear, while putting all of your control in your hands.</p>
          <img className='HA_landing_part_5_Leftside_image' src={img2} alt="" />
        </div>
        <div className='HA_landing_part_5_Rightside'>
          <div className='HA_landing_part_5_Rightside_child'>
            <div className='HA_landing_part_5_Rightside_blurb'>
              <img src={img3} alt="" />
              <p className='HA_landing_part_5_Rightside_blurb_text'>Manage  listings </p>
              <p className='HA_landing_part_5_Rightside_blurb_text2'>Easily manage the availability of your  gear
                by making machines
                available or  unavailable
                in a single click. </p>
            </div>
            <div className='HA_landing_part_5_Rightside_blurb'>
              <img src={img3} alt="" />
              <p className='HA_landing_part_5_Rightside_blurb_text'>Manage  listings </p>
              <p className='HA_landing_part_5_Rightside_blurb_text2'>Easily manage the availability of your  gear
                by making machines
                available or  unavailable
                in a single click. </p>
            </div>
            <div className='HA_landing_part_5_Rightside_blurb'>
              <img src={img3} alt="" />
              <p className='HA_landing_part_5_Rightside_blurb_text'>Manage  listings </p>
              <p className='HA_landing_part_5_Rightside_blurb_text2'>Easily manage the availability of your  gear
                by making machines
                available or  unavailable
                in a single click. </p>
            </div>
            <div className='HA_landing_part_5_Rightside_blurb'>
              <img src={img3} alt="" />
              <p className='HA_landing_part_5_Rightside_blurb_text'>Manage  listings </p>
              <p className='HA_landing_part_5_Rightside_blurb_text2'>Easily manage the availability of your  gear
                by making machines
                available or  unavailable
                in a single click. </p>
            </div>
          </div>
        </div>

      </div>
      <Table_HA/>
      <div className='HA_landing_part_7'>
        <div className='HA_landing_part_7_child'>
          <p className='HA_landing_part_7_heading' >Get paid on time.
            Every time.</p>
          <p className='HA_landing_part_4_para'>We guarantee that you’ll get paid for every rental. When your machines get  rented , money will be deposited into your account every month, plain and simple.</p>
          <Button style={button_styling}>
            Get Started
          </Button>

        </div>
      </div>
      <div className='HA_landing_part_8'>
          <FAQSection/>
        <div className='HA_landing_part_8_child'>
        <div className='HA_landing_part_8_child2'>
            <img className='HA_landing_part_8_child2_img' src={img4} alt="" />
          <div className='HA_landing_part_8_child1'>
            <p className='HA_landing_part_8_child1_heading'>Still have question?</p>
            <p className='HA_landing_part_8_child1_para'>Get answer from an experienced Superhost new  you.</p>
            <Button className='HA_landing_part_8_child2_button' style={button_styling3}>
            Match with a Super host
          </Button>
          </div>
        </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default LandingPage
