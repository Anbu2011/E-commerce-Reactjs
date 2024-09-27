import React, { useEffect, useState } from 'react'
import './RandomProducts.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RandomProducts = () => {

    const {allProductArray, productLoading} = useSelector((state) => state.allProductsInfo)
    const searchInput = useSelector((state) => state.allProductsInfo.searchInput)

    //searching title
    const [foundedProducts, setFoundedProducts] = useState([])
    useEffect(() => {
      if(searchInput){
        const searchedMapArray = allProductArray.filter((product) => (product.title.toLowerCase().includes(searchInput.toLowerCase())))
        setFoundedProducts(searchedMapArray)
      } else{
        setFoundedProducts([])
      }
    }, [allProductArray, searchInput]);

    //shuffling the array for random products
    const shuffledArray = [...allProductArray].sort(() => 0.5 - Math.random())
    const randomProducts = shuffledArray.slice(0, 10)

    // const randomNumber = Math.floor(Math.random() * (allProductArray.length - 10))
    // const randomProducts = allProductArray.slice(randomNumber, randomNumber+10)

  return (
    <>
        <div className='grid-container'>
          {searchInput ? 
            (foundedProducts.map((searchedProduct) => (
                <div className='grid-child'>
                  <Link to={`/productdetails/${searchedProduct.id}`}>
                    <a href="#" key={searchedProduct.id}>
                      <img src={searchedProduct.image} alt='' className='grid-image'/>
                      <p className='title'>{searchedProduct.title}</p>
                      <p>₹{searchedProduct.price}</p>
                    </a>
                  </Link>
                </div>
            ))) 
            :
            (randomProducts.map((each)=>(
                <div className='grid-child'>
                  <Link to={`/productdetails/${each.id}`}>
                    <a href="#" key={each.id}>
                      <img src={each.image} alt='' className='grid-image'/>
                      <p className='title'>{each.title}</p>
                      <p>₹{each.price}</p>
                    </a>
                  </Link>
                </div>
            )))
          }
        </div>
    </>
  )
}

export default RandomProducts