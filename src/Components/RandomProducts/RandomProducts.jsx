import React from 'react'
import './RandomProducts.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RandomProducts = () => {
    const navigate = useNavigate()
    const {allProductArray, productLoading} = useSelector((state) => state.allProductsInfo)

    const randomProducts = []
    for(let i=0; i<10; i++){
        let randomNumber = Math.floor(Math.random() * 20 + 1 )

        const eachProduct = allProductArray.find((product)=> product.id === randomNumber )

        if(eachProduct){
          randomProducts.push(eachProduct)
        }

    }

  return (
    <>
        <div className='grid-container'>
          {randomProducts.map((each)=>(
            <div className='grid-child'>
              <a href="#" key={each.id}>
                <img src={each.image} alt='' className='grid-image'/>
                <p className='title'>{each.title}</p>
                <p>₹{each.price}</p>
              </a>
              
            </div>
          ))}
        </div>
    </>
  )
}

export default RandomProducts