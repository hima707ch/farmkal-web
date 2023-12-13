import React from 'react'
import prod1 from '../images/gurd.webp'
import { Star } from '@mui/icons-material'

const ProductCard = () => {
  return (
    <div className='prod-card-cont'>

        <img className='img-prod' src = {prod1} />
        <div className='info title' >
            Name or Title 
        </div>

        <div className='info desc' >
            <center> Short Description of product </center>
        </div>

        <div className='info info1'>
            Other Info 1
        </div>

        <div className='info info2'>
            <Star className='icon-star' />  4.5 <br /> 
        </div>

        <div className='info info3'>
            Other Info 3
        </div>

        <div className='info mrp'>
            ₹ 1000
        </div>

        <button className='info add-to-cart'>Add to Cart</button>
        

    </div>
  )
}

export default ProductCard