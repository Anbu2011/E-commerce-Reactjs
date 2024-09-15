import React from 'react'
import './RandomProducts.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RandomProducts = () => {

    const {allProductArray, productLoading} = useSelector((state) => state.allProductsInfo)

    const shuffledArray = [...allProductArray].sort(() => 0.5 - Math.random())
    const randomProducts = shuffledArray.slice(0, 10)

    // const randomNumber = Math.floor(Math.random() * (allProductArray.length - 10))
    // const randomProducts = allProductArray.slice(randomNumber, randomNumber+10)

  return (
    <>
        <div className='grid-container'>
          {randomProducts.map((each)=>(
            <div className='grid-child'>
              <Link to={`/productdetails/${each.id}`}>
                <a href="#" key={each.id}>
                  <img src={each.image} alt='' className='grid-image'/>
                  <p className='title'>{each.title}</p>
                  <p>₹{each.price}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
    </>
  )
}

export default RandomProducts