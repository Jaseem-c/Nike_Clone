import React from 'react'
import first from '../assets/Member Product.jpg'
import second from '../assets/Nike By you.png'
import third from '../assets/Member Rewards.png'
import fourth from '../assets/Member Days.png'
import fifth from '../assets/Spot and wellness.jpg'
import sixth from '../assets/SNKRS.jpg'
function MemberBenefits() {
    return (
        <>
            <h3 className='ms-5' style={{ marginTop: "85px" }}>Member Benefits</h3>
            <div className="container-fluid mt-4 mb-5">
                <div className="row flex-row flex-nowrap overflow-auto ms-1 px-4 mb-5">
                    <div className="col-12 col-md-6 col-lg-4 mb-3" style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={first} alt="" style={{ position: "relative" }} />
                            <div style={{ position: "absolute", bottom: "45px",left:"45px" }}>
                                <p className='text-light fw-normal'>Member Product</p>
                                <h4 className='text-light'>Your Exclusive Access</h4>
                                <button className='btn btn-light rounded-5 fw-normal mt-3 fw-bold px-3'>Shop</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3" style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={second} alt=""  style={{ position: "relative" }}/>
                            <div style={{ position: "absolute", bottom: "45px",left:"45px" }}>
                                <p className='text-light fw-normal'>Nike By You</p>
                                <h4 className='text-light'>Your Customisation Service</h4>
                                <button className='btn btn-light rounded-5 fw-normal mt-3 fw-bold px-3'>Customise</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3" style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={third} alt=""  style={{ position: "relative" }} />
                            <div style={{ position: "absolute", bottom: "45px",left:"45px" }}>
                                <p className='text-light fw-normal'>Member Rewards</p>
                                <h4 className='text-light'>How we Say Thank You</h4>
                                <button className='btn btn-light rounded-5 fw-normal mt-3 fw-bold px-3'>Celebrate</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3" style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={fourth} alt="" style={{ position: "relative" }} />
                            <div style={{ position: "absolute", bottom: "45px",left:"45px" }}>
                                <p className='text-light fw-normal'>Member Days</p>
                                <h4 className='text-light'>A celebration of You</h4>
                                <button className='btn btn-light rounded-5 fw-normal mt-3 fw-bold px-3'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3" style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={fifth} alt="" style={{ position: "relative" }} />
                            <div style={{ position: "absolute", bottom: "45px",left:"45px" }}>
                                <p className='text-light fw-normal'>Sport & Wellness Apps</p>
                                <h4 className='text-light'>Movement Where You are</h4>
                                <button className='btn btn-light rounded-5 fw-normal mt-3 fw-bold px-3'>Move</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3" style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={sixth} alt=""  style={{ position: "relative" }}/>
                            <div style={{ position: "absolute", bottom: "45px",left:"45px" }}>
                                <p className='text-light fw-normal'>SNKRS</p>
                                <h4 className='text-light'>Your Ultimate Sneaker<br/> Community</h4>
                                <button className='btn btn-light rounded-5 fw-normal mt-3 fw-bold px-3'>Explore</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberBenefits