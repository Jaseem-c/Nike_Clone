import React from 'react'
import featured1 from '../assets/Featured2.jpg'
import featured2 from '../assets/Featured1.png'
import  '../Css/Featured.css'

function Featured() {
  return (
   <>
    <h3 className='text-dark  ms-5 mb-4' style={{marginTop:"80px"}}>Featured</h3>
   <div className="div px-5 mb-5">
    <div className="row">
        <div className="col-md-6 mt-2" style={{position:"relative"}}>
            <img src={featured1} alt="" width={'100%'} height={"800px"} />
            <div className='imgdiv'>
                <h3 className='text-light'>Nike Alate Bra</h3>
                <h5 className='text-light mt-3'>Looks Smooth,Feels Smoother</h5>
                <button className='btn btn-light rounded-5 fw-normal mt-3'>Shop Now</button>
            </div>
        </div>
        <div className="col-md-6 mt-2" style={{position:"relative"}}>
        <img src={featured2} alt="" width={'100%'} height={"800px"} />
            <div className='imgdiv'>
                <h3 className='text-light'>Just In:Air Max Dn</h3>
                <h5 className='text-light mt-3'>Victor Wembanyama: Otherworldly Moves </h5>
                <button className='btn btn-light rounded-5 fw-normal mt-3'>Shop Now</button>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Featured