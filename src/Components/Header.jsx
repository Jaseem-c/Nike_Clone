import React, { useState } from 'react'
import { Button, Container, Dropdown, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import '../Css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import heart from '../assets/heart.svg'
import bag from '../assets/bag.svg'



function Header() {
    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);
    const handleMouseEnter1 = () => {
        setShowDiv1(true);
    };
    const handleMouseLeave1 = () => {
        setShowDiv1(false);
    };
    const handleMouseEnter2 = () => {
        setShowDiv2(true);
    };
    const handleMouseLeave2 = () => {
        setShowDiv2(false);
    };


    // new
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (item) => {
        if (item !== 'Customize' && item !== 'SNKRS') {
            setHoveredItem(item);
        }
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    return (
        <>
            {/* section1 */}
            <Navbar expand="lg" className="bg-body-tertiary px-5" >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/jordan-2.svg"
                            width="20"
                            height="20"
                            className="d-inline-block "
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Nav className="d-flex align-items-center " >
                            <Nav.Link href="#home" className='fw-bold text-dark fs-6'>Find a Store</Nav.Link>
                            <div style={{ width: "2px", height: "15px", backgroundColor: "black" }}></div>
                            <Navbar.Text onMouseEnter={handleMouseEnter1}
                                onMouseLeave={handleMouseLeave1}
                                className="hover-target fw-bold text-dark fs-6 ms-2 me-2">
                                Help
                            </Navbar.Text>
                            {showDiv1 && (
                                <div className="hover-div  ps-3 py-3 rounded shadow " style={{ width: "250px" }} onMouseEnter={handleMouseEnter1}
                                    onMouseLeave={handleMouseLeave1}>
                                    <h4>Help</h4>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Order Status</Nav.Link>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Dispatch And Delivery</Nav.Link>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Returns</Nav.Link>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Contact Us</Nav.Link>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Privacy Policy</Nav.Link>
                                </div>
                            )}
                            <div style={{ width: "2px", height: "15px", backgroundColor: "black" }}></div>
                            <Navbar.Text onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}
                                className="hover-target fw-bold text-dark fs-6 ms-2 me-2">
                                Hi,Jaseem<FontAwesomeIcon icon={faUser} className='ms-2' />
                            </Navbar.Text>
                            {showDiv2 && (
                                <div className="hover-div2  ps-3 py-3 rounded shadow " style={{ width: "250px" }} onMouseEnter={handleMouseEnter2}
                                    onMouseLeave={handleMouseLeave2}>
                                    <h4>Account</h4>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Profile</Nav.Link>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Order</Nav.Link>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Favourite</Nav.Link>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Settings</Nav.Link>
                                    <Nav.Link style={{ fontSize: "13px", fontWeight: "bold" }}>Log Out</Nav.Link>

                                </div>
                            )}



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* section2 */}
          
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg-transparent px-5 navsection2">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <img
                                src="https://www.svgrepo.com/show/303214/nike-4-logo.svg"
                                width="60"
                                height="60"
                                className="d-inline-block"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto me-0">
                                {['New & Featured', 'Men', 'Women', 'Kids', 'Sale', 'Customize', 'SNKRS'].map((item, index) => (
                                    <Navbar.Text
                                        key={index}
                                        className="text-dark fw-bold me-3 navlink"
                                        onMouseEnter={() => handleMouseEnter(item)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {item}
                                    </Navbar.Text>
                                ))}
                            </Nav>
                            <Nav className="ms-auto">
                                <div className="container-input me-2">
                                    <input type="text" placeholder="Search" name="text" className="input bg-body-tertiary" />
                                    <button type="submit" className="search-button bg-body-light">
                                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <div style={{ width: "35px", height: "35px", borderRadius: "50%" }} className="d-flex align-items-center justify-content-center navbutton">
                                    <button className="btn btn-transparent">
                                        <img src={heart} alt="" width="20px" />
                                    </button>
                                </div>
                                <div style={{ width: "35px", height: "35px", borderRadius: "50%" }} className="d-flex align-items-center justify-content-center navbutton">
                                    <button className="btn btn-transparent">
                                        <img src={bag} alt="" width="20px" />
                                    </button>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {hoveredItem && hoveredItem !== 'Customize' && hoveredItem !== 'SNKRS' && (
                    <div className="overlay" onMouseEnter={() => setHoveredItem(hoveredItem)} onMouseLeave={handleMouseLeave}>
                        {hoveredItem === 'New & Featured' &&
                            <div className='container d-flex align-items-center justify-content-center '>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>New & Featured</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Shop Icons</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>New For Mens</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>New For Womens</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>New For Kids</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>


                            </div>}
                        {hoveredItem === 'Men' &&
                            <div className='container d-flex  justify-content-center '>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Featured</span>
                                    <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <div className='d-flex flex-column mt-5'>
                                        <span className='text-dark' style={{ fontWeight: "bold" }}>Jordan</span>
                                        <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    </div>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Shoes</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Clothing</span>
                                    <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <div className='d-flex flex-column mt-5'>
                                        <span className='text-dark' style={{ fontWeight: "bold" }}>Accessories and Equipment</span>
                                        <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    </div>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Shop By Sport</span>
                                    <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <div className='d-flex flex-column mt-5'>
                                        <span className='text-dark' style={{ fontWeight: "bold" }}>Shop By Brand</span>
                                        <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    </div>
                                </div>


                            </div>}
                        {hoveredItem === 'Women' &&
                            <div className='container d-flex  justify-content-center '>
                             <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Featured</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>  
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Shoes</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Clothing</span>
                                    <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <div className='d-flex flex-column mt-5'>
                                        <span className='text-dark' style={{ fontWeight: "bold" }}>Accessories and Equipment</span>
                                        <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    </div>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Shop By Sport</span>
                                    <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <div className='d-flex flex-column mt-5'>
                                        <span className='text-dark' style={{ fontWeight: "bold" }}>Shop By Brand</span>
                                        <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    </div>
                                </div>
                            </div>}
                        {hoveredItem === 'Kids' &&
                         <div className='container d-flex  justify-content-center '>
                            <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Featured</span>
                                    <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <div className='d-flex flex-column mt-5'>
                                        <span className='text-dark' style={{ fontWeight: "bold" }}>Kids By Age</span>
                                        <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    </div>
                                </div> 
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Boy's Shoes</span>
                                    <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <div className='d-flex flex-column mt-5'>
                                        <span className='text-dark' style={{ fontWeight: "bold" }}>Boy's Clothing</span>
                                        <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    </div>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Girl's Shoes</span>
                                    <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <div className='d-flex flex-column mt-5'>
                                        <span className='text-dark' style={{ fontWeight: "bold" }}>Girl's Clothing</span>
                                        <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    </div>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Accessories & Equipments</span>
                                    <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <div className='d-flex flex-column mt-5'>
                                        <span className='text-dark' style={{ fontWeight: "bold" }}>Shop By Sport</span>
                                        <span className='mt-3 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                        <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    </div>
                                </div>
                            </div>}
                        {hoveredItem === 'Sale' &&
                         <div className='container d-flex  justify-content-center' >
                              <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Sale</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Men's Sale</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Women's Sale</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                                <div className='d-flex flex-column ms-5 me-5'>
                                    <span className='text-dark' style={{ fontWeight: "bold" }}>Kid's Sale</span>
                                    <span className='mt-4 text-secondary' style={{ cursor: "pointer", fontSize: "13px" }}></span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                    <span className=' text-secondary mb-1' style={{ cursor: "pointer", fontSize: "13px" }}>lorem</span>
                                </div>
                            </div>}
                    </div>
                )}
            </div>

        </>
    )
}

export default Header