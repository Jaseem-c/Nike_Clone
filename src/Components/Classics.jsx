import React from 'react'
import first from '../assets/Air Jordan 1.jpg'
import second from '../assets/Dunk.jpg'
import third from '../assets/Blazer.jpg'
import fourth from '../assets/Air Force 1.jpg'

function Classics() {
    return (
        <>
            <h3 className='ms-5' style={{marginTop:"85px"}}>Classics Spotlight</h3>
    <div className="container-fluid mt-4 mb-5">
            <div className="row flex-row flex-nowrap overflow-auto ms-1 px-4 mb-5">
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={first} alt=""  />
                        
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={second} alt=""  />
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={third} alt=""  />
                           
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={fourth} alt=""  />
                        </div>
                    </div>
                    </div>
        </div>
        </>
    )
}

export default Classics