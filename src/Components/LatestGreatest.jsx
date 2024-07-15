import React from 'react'
import first from '../assets/Air Jordan 1 low.png'
import second from '../assets/Nike Zoom Vomero 5 1.png'
import third from '../assets/Nike Air Force.png'
import fourth from '../assets/Nike V2k Run.png'
import fifth from '../assets/Nike Zoom Vomero 5 2.png'
import sixth from '../assets/Nike Air Max Dn.png'
import seventh from '../assets/Nike Alphafly 3.png'
import eight from '../assets/Nike Pegasus 41 square.png'
import nine from '../assets/Nike Mercurial Superfly.png'
function LatestGreatest() {
  return (
    <>
    <h3 className='ms-5' style={{marginTop:"85px"}}>The Latest & Greatest</h3>
    <div className="container-fluid mt-4 mb-5">
            <div className="row flex-row flex-nowrap overflow-auto ms-1 px-4 mb-5">
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={first} alt=""  />
                            <h6 className='mt-3'>Air Jordan 1 Low</h6>
                            <h6 style={{color:"gray"}}>Men's Shoes</h6>
                            <h6 >MRP: ₹ 8 995.00</h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={second} alt=""  />
                            <h6 className='mt-3'>Nike Zoom Vomero 5</h6>
                            <h6 style={{color:"gray"}}>Women's Shoes</h6>
                            <h6 >MRP: ₹ 15 995.00</h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={third} alt=""  />
                            <h6 className='mt-3'>Nike Air Force 1'07</h6>
                            <h6 style={{color:"gray"}}>Women's Shoes</h6>
                            <h6 >MRP: ₹ 9 965.00</h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={fourth} alt=""  />
                            <h6 className='mt-3'>Nike V2K Run</h6>
                            <h6 style={{color:"gray"}}>Shoes</h6>
                            <h6 >MRP: ₹ 10 795.00</h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={fifth} alt=""  />
                            <h6 className='mt-3'>Nike Zoom Vomero 5</h6>
                            <h6 style={{color:"gray"}}>Men's Shoes</h6>
                            <h6 >MRP: ₹ 14 995.00</h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={sixth} alt=""  />
                            <h6 className='mt-3'>Nike Air Max Dn</h6>
                            <h6 style={{color:"gray"}}>Shoes</h6>
                            <h6 >MRP: ₹ 13 995.00</h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={seventh} alt=""  />
                            <h6 className='mt-3'>Nike Alphafly 3 Blueprint</h6>
                            <h6 style={{color:"gray"}}>Women's Road Racing Shoes</h6>
                            <h6 >MRP: ₹ 22 795.00</h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={eight} alt=""  />
                            <h6 className='mt-3'>Nike Pegasus 41 Blueprint</h6>
                            <h6 style={{color:"gray"}}>Men's Road Running Shoes</h6>
                            <h6 >MRP: ₹ 11 895.00</h6>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={eight} alt=""  />
                            <h6 className='mt-3'>Nike Pegasus 41 Blueprint</h6>
                            <h6 style={{color:"gray"}}>women's Road Running Shoes</h6>
                            <h6 >MRP: ₹ 11 895.00</h6>
                        </div>
                    </div>
                   
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={nine} alt=""  />
                            <h6 className='mt-3'>Nike Mercurial Superfly 10 Elite Blueprint</h6>
                            <h6 style={{color:"gray"}}>FG High-Top Football Boot</h6>
                            <h6 >MRP: ₹ 23 795.00</h6>
                        </div>
                    </div>
                   
            </div>
        </div>
    </>
  )
}

export default LatestGreatest