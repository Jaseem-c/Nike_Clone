import React from 'react'
import herovideo2 from '../assets/Hero video2.mp4'
import herovideo1 from '../assets/Hero1.mp4'
import '../Css/Landing.css'
import ShopAir from '../Components/ShopAir'
import Featured from '../Components/Featured'
import LatestGreatest from '../Components/LatestGreatest'
import imgback from '../assets/Imageback.jpg'
import Classics from '../Components/Classics'
import ShopBySport from '../Components/ShopBySport'
import MemberBenefits from '../Components/MemberBenefits'
function LandingPage() {
  return (
    <>
      <div className='bg-body-tertiary ' style={{ width: "100%", height: "65px" }}></div>
      <div className="container-fluid px-5">
  <div className="div">
    <video style={{ width: "100%" }} className="videoTag" autoPlay loop muted>
      <source src={herovideo1} type="video/mp4" />
    </video>
  </div>
  <div className="d-flex align-items-center justify-content-center flex-column text-center">
    <h1 className="text-dark mt-3" style={{ fontWeight: "bolder", fontSize: "clamp(2rem, 8vw, 5rem)", letterSpacing: "-3px" }}>OUR TURN</h1>
    <p className="mt-2">We're not waiting on history. We're making it.</p>
    <button className="btn btn-dark rounded-5 px-3 mt-2 mb-5">Let's Go</button>
  </div>
  <h3 className="text-dark mt-5  ms-md-3 mb-4">Featured</h3>
  <div className="div">
    <video style={{ width: "100%" }} className="videoTag" autoPlay loop muted>
      <source src={herovideo2} type="video/mp4" />
    </video>
  </div>
  <div className="d-flex align-items-center justify-content-center flex-column text-center">
    <h1 className="text-dark mt-3" style={{ fontWeight: "bolder", fontSize: "clamp(2rem, 8vw, 5rem)", letterSpacing: "-3px" }}>WIN ON AIR</h1>
    <p className="mt-2">Meet The Next Generation Of Nike Air. Engineered To The Exact Specification Of Championship Athletes.</p>
    <button className="btn btn-dark rounded-5 px-3 mt-2 mb-5">Shop Air</button>
  </div>
</div>

      {/* shop air section */}
      <ShopAir/>
      {/* featured section */}
      <Featured/>
      <LatestGreatest/>
      <img src={imgback} alt=""  width={"100%"} style={{marginTop:"100px"}}/>
      <Classics/>
      <ShopBySport/>
      <MemberBenefits/>
    </>
  )
}

export default LandingPage