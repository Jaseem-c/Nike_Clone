import { faAngleDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Css/Footer.css'

function Footer() {


  return (
    <>
      {/* <div className="footer px-5 d-flex align-items-center justify-content-center flex-column">
        <div style={{ width: "900px", height: "40=30px" }}>
          <div className='row py-3 mb-3'>
            <div className="col-md-3">
              <h3 className='mb-4'>Icons</h3>
              <div className='div' >
                <h6 className='text-secondary'>Air Force 1</h6>
                <h6 className='text-secondary'>Huarache</h6>
                <h6 className='text-secondary'>Air Max 90</h6>
                <h6 className='text-secondary' >Air Max 95</h6>
              </div>
              <div className='hoverdiv' >
                <h6 className='text-secondary'>Air Max 97</h6>
                <h6 className='text-secondary'>Air Max 270</h6>
                <h6 className='text-secondary'>Air Max 720</h6>
                <h6 className='text-secondary'>All Air Max</h6>
                <h6 className='text-secondary'>Vapormax</h6>
              </div>
            </div>
            <div className="col-md-3">
              <h3 className='mb-4'>Shoes</h3>
              <div className='div'>
                <h6 className='text-secondary'>All Shoes</h6>
                <h6 className='text-secondary'>Custom Shoes</h6>
                <h6 className='text-secondary'>Jordan Shoes</h6>
                <h6 className='text-secondary' >Running Shoes</h6>
              </div>
              <div className='hoverdiv' >
                <h6 className='text-secondary'>Basket Ball Shoes</h6>
                <h6 className='text-secondary'>Football Shoes</h6>
                <h6 className='text-secondary'>Gym & Traing Shoes</h6>
                <h6 className='text-secondary'>Life Style Shoes</h6>
              </div>
            </div>
            <div className="col-md-3">
              <h3 className='mb-4'>Clothing</h3>
              <div className='div' >
                <h6 className='text-secondary'>All Clothing</h6>
                <h6 className='text-secondary'>Modest Wear</h6>
                <h6 className='text-secondary'>Huddies & Pullovers</h6>
                <h6 className='text-secondary' >Shirts & Tops</h6>
              </div>
              <div className='hoverdiv' >
                <h6 className='text-secondary'>Jackets</h6>
                <h6 className='text-secondary'>Compression & Nike Pro</h6>
                <h6 className='text-secondary'>Trousers & Leggins</h6>
                <h6 className='text-secondary'>Shorts</h6>
              </div>
            </div>
            <div className="col-md-3">
              <h3 className='mb-4'>Kids'</h3>
              <div className='div' >
                <h6 className='text-secondary'>Infant & Toddler Shoes</h6>
                <h6 className='text-secondary'>Kids' Socks</h6>
                <h6 className='text-secondary'>Kids' Shoes</h6>
                <h6 className='text-secondary' >Kids' Jordan Shoes</h6>
              </div>
              <div className='hoverdiv' >
                <h6 className='text-secondary'>Kids' Basketball Shoes</h6>
                <h6 className='text-secondary'>Kids' Running Shoes</h6>
                <h6 className='text-secondary'>Kids' Clothing</h6>
                <h6 className='text-secondary'>Kids' Backpacks</h6>
              </div>
            </div>
          </div>
          
        </div>
        <div className='bg-body-secondary' style={{width:"100%",height:"2px"}}></div>
      </div> */}
      <div className="footer px-5 d-flex align-items-center justify-content-center flex-column">
  <div className="container">
    <div className="row py-3 mb-3">
      <div className="col-12 col-md-3 mb-4 mb-md-0">
        <h3 className="mb-4">Icons</h3>
        <div>
          <h6 className="text-secondary">Air Force 1</h6>
          <h6 className="text-secondary">Huarache</h6>
          <h6 className="text-secondary">Air Max 90</h6>
          <h6 className="text-secondary">Air Max 95</h6>
        </div>
        <div>
          <h6 className="text-secondary">Air Max 97</h6>
          <h6 className="text-secondary">Air Max 270</h6>
          <h6 className="text-secondary">Air Max 720</h6>
          <h6 className="text-secondary">All Air Max</h6>
          <h6 className="text-secondary">Vapormax</h6>
        </div>
      </div>
      <div className="col-12 col-md-3 mb-4 mb-md-0">
        <h3 className="mb-4">Shoes</h3>
        <div>
          <h6 className="text-secondary">All Shoes</h6>
          <h6 className="text-secondary">Custom Shoes</h6>
          <h6 className="text-secondary">Jordan Shoes</h6>
          <h6 className="text-secondary">Running Shoes</h6>
        </div>
        <div>
          <h6 className="text-secondary">Basketball Shoes</h6>
          <h6 className="text-secondary">Football Shoes</h6>
          <h6 className="text-secondary">Gym & Training Shoes</h6>
          <h6 className="text-secondary">Lifestyle Shoes</h6>
        </div>
      </div>
      <div className="col-12 col-md-3 mb-4 mb-md-0">
        <h3 className="mb-4">Clothing</h3>
        <div>
          <h6 className="text-secondary">All Clothing</h6>
          <h6 className="text-secondary">Modest Wear</h6>
          <h6 className="text-secondary">Hoodies & Pullovers</h6>
          <h6 className="text-secondary">Shirts & Tops</h6>
        </div>
        <div>
          <h6 className="text-secondary">Jackets</h6>
          <h6 className="text-secondary">Compression & Nike Pro</h6>
          <h6 className="text-secondary">Trousers & Leggings</h6>
          <h6 className="text-secondary">Shorts</h6>
        </div>
      </div>
      <div className="col-12 col-md-3 mb-4 mb-md-0">
        <h3 className="mb-4">Kids'</h3>
        <div>
          <h6 className="text-secondary">Infant & Toddler Shoes</h6>
          <h6 className="text-secondary">Kids' Socks</h6>
          <h6 className="text-secondary">Kids' Shoes</h6>
          <h6 className="text-secondary">Kids' Jordan Shoes</h6>
        </div>
        <div>
          <h6 className="text-secondary">Kids' Basketball Shoes</h6>
          <h6 className="text-secondary">Kids' Running Shoes</h6>
          <h6 className="text-secondary">Kids' Clothing</h6>
          <h6 className="text-secondary">Kids' Backpacks</h6>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-body-secondary" style={{ width: "100%", height: "2px" }}></div>
</div>


      {/* second section */}
      <div className='container-fluid px-5 mt-5'>
        <div className="row">
          <div className="col-md-2">
            <p className='text-dark' style={{ fontWeight: "bold" }}>Resources</p>
            <p className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Find A store</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Become A Member</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Send Us Feedback</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <p className='text-dark' style={{ fontWeight: "bold" }}>Help</p>
            <p className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Get Help</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Order Status</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Delivery</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Returns</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Payment Options</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Contact Us On Nike.com Inquiries</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Contact Us On All Other Inquiries</p>
          </div>

          <div className="col-md-2">
            <p className='text-dark' style={{ fontWeight: "bold" }}>Company</p>
            <p className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>About Nike</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>News</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Career</p>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px" }}>Investors</p>

          </div>
          <div className="col-md-3"></div>
          <div className="col-md-1" style={{ position: "relative" }}>
            <p className=' text-secondary' style={{ cursor: "pointer", fontSize: "15px", position: "absolute", right: "0" }}><FontAwesomeIcon icon={faGlobe} className='me-2' />India</p>
          </div>
        </div>
        <div style={{ marginTop: "35px", marginBottom: "50px" }} className='d-flex'>
          <p className=' text-secondary me-3'>© 2024 Nike, Inc. All rights reserved</p>
          <div className="dropup-container">
            <span className="dropup-trigger text-secondary" style={{ cursor: "pointer" }}>Guides<FontAwesomeIcon icon={faAngleDown} /></span>
            <div className="dropup-list">
              <div className="dropup-item">Nike Adapt</div>
              <div className="dropup-item">Nike Air</div>
              <div className="dropup-item">Nike Air Force 1</div>
              <div className="dropup-item">Nike Air Max</div>
              <div className="dropup-item">Nike FlyEase</div>
              <div className="dropup-item">Nike Flyknit</div>
              <div className="dropup-item">Nike Flyleather</div>
              <div className="dropup-item">Nike Free</div>
              <div className="dropup-item">Nike Joyride</div>
              <div className="dropup-item">Nike Pegasus</div>
              <div className="dropup-item">Nike React</div>
              <div className="dropup-item">Nike Vaporfly</div>
              
            </div>
          </div>
          <p className=' text-secondary ms-3' style={{ cursor: "pointer" }}>Term Of Sale</p>
          <p className=' text-secondary ms-3' style={{ cursor: "pointer" }}>Term Of Use</p>
          <p className=' text-secondary ms-3' style={{ cursor: "pointer" }}>Nike Privacy Policy</p>


         

        </div>

      </div>
    </>
  )
}

export default Footer