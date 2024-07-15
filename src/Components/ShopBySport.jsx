import React from 'react'
import first from '../assets/Nike Basket Ball.jpg'
import second from '../assets/Nike Golf.jpg'
import third from '../assets/Nike Trail.jpg'
import fourth from '../assets/NIke Tennis.jpg'
import fifth from '../assets/Nike Football.jpg'
function ShopBySport() {
  return (
    <>
      <h3 className='ms-5' style={{marginTop:"85px"}}>Shop by Sport</h3>
    <div className="container-fluid mt-4 mb-5">
            <div className="row flex-row flex-nowrap overflow-auto ms-1 px-4 mb-5">
                    <div className="col-12 col-md-6 col-lg-4 mb-3"  style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={first} alt=""  />
                            <h5 className='mt-3'>Nike Basket Ball</h5>
                            <p >Styles made for your game</p>
                           <button style={{width:"50px",height:"30px",backgroundColor:"transparent",border:"0",borderBottom:'2px solid black',fontWeight:"bold"}}> <p>Shop</p></button>
                       </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-2"  style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={second} alt="" />  
                            <h5 className='mt-3'>Nike Golf</h5>
                            <p >Conquer any course in style</p>
                           <button style={{width:"50px",height:"30px",backgroundColor:"transparent",border:"0",borderBottom:'2px solid black',fontWeight:"bold"}}> <p>Shop</p></button>       
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-2"  style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={third} alt=""  />
                            <h5 className='mt-3'>Nike Trail</h5>
                            <p >Gear that leads to wild places</p>
                           <button style={{width:"50px",height:"30px",backgroundColor:"transparent",border:"0",borderBottom:'2px solid black',fontWeight:"bold"}}> <p>Shop</p></button>
                           
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-2"  style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={fourth} alt=""  />
                            <h5 className='mt-3'>Nike Tennis</h5>
                            <p >Serve up in style</p>
                           <button style={{width:"50px",height:"30px",backgroundColor:"transparent",border:"0",borderBottom:'2px solid black',fontWeight:"bold"}}> <p>Shop</p></button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-2"  style={{ minWidth: '400px' }}>
                        <div className="card border-0 mb-5">
                            <img src={fifth} alt=""  />
                            <h5 className='mt-3'>Nike Football</h5>
                            <p >Bring mad style to the pitch with the latest gear</p>
                           <button style={{width:"50px",height:"30px",backgroundColor:"transparent",border:"0",borderBottom:'2px solid black',fontWeight:"bold"}}> <p>Shop</p></button>
                        </div>
                    </div>
                    </div>
        </div>
    </>
  )
}

export default ShopBySport