import React from 'react'
import first from '../assets/Nike Pegasus 41.jpg'
import second from '../assets/Nike G.T. Hustle 3.jpg'
import third from '../assets/Nike Alphafly 3.png'
import fourth from '../assets/Nike Mercurial Superfly.png'
import fifth from '../assets/Nike Pegasus EasyOn.jpg'
import sixth from '../assets/Nike Mercurial Vapor.jpg'
import '../Css/shopair.css'


function ShopAir() {
  const cardsData = [
    { imgSrc: first, title: 'Nike Pegasus 41' },
    { imgSrc: second, title: 'Nike G.T. Hustle 3' },
    { imgSrc:  third, title: 'Nike Alphafly 3' },
    { imgSrc: fourth, title: 'Nike Mercurial Superfly' },
    { imgSrc: fifth, title: 'Nike Pegasus EasyOn' },
    { imgSrc:  sixth, title: 'Nike Mercurial Vapor' }
];
  return (
    <>
   <h3 className='ms-5 mt-5'>Shop Air</h3>
         {/* <div className="container-fluid mt-4">
            <div className="row flex-row flex-nowrap overflow-auto ms-1 px-4">
                {[...Array(4)].map((_, index) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-3" key={index} style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={first} alt="..." height={'550px'} width={'100%'} />
                            <div className="card-body">
                                <h5 className="card-title mt-3">title</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> */}
         <div className="container-fluid mt-4 mb-5">
            <div className="row flex-row flex-nowrap overflow-auto ms-1 px-4 mb-5">
                {cardsData.map((card, index) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-3" key={index} style={{ minWidth: '400px' }}>
                        <div className="card border-0">
                            <img src={card.imgSrc} alt={card.title} height={'550px'} width={'100%'} />
                            <div className="card-body">
                                <h5 className="card-title mt-3">{card.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default ShopAir