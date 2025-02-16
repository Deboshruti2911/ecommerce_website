import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="desctriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that allows users to browse, purchase, and sell products or services. It provides secure payment options, personalized recommendations, and seamless navigation. These websites help businesses reach a global audience with minimal overhead costs.</p>
        </div>
    </div>
  )
}

export default DescriptionBox