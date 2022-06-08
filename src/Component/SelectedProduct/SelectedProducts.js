import React, { useEffect } from 'react'
import '../../Component/SelectedProduct/SelectedProducts.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts, removeSelectedProducts } from '../../Redux/Action/Action'

function SelectedProducts() {

  const { id } = useParams('/product/:id')
  const productid = id
  const dispatch = useDispatch();
  const products = useSelector( (state) => state.product)
  console.log(products)
  const { title, image, price, category, description } = products

  const fetchdetails = async () => {
    const response = await axios.get(`http://fakestoreapi.com/products/${productid}`)
      .catch(err => console.log(err))
      dispatch(selectedProducts(response.data))
  }

  useEffect(() => {
    if (productid && productid !== "") {
      fetchdetails()
      return () => {
        dispatch(removeSelectedProducts())
      }
    }
  }, [productid])

  const holder = <div className='holder'>
    <div className='left'>
      <img src={image} alt='' />
    </div>
    <div className='right'>
      <div className='ctgry'><h4>Category:- {category}</h4></div>
      <h3>{title}</h3>
      <div className='price'><h4>Rs. {price}</h4></div>
      <p>{description}</p>
      <div className='rating'><h5>Rating:-3</h5></div>
      <button className='cart'>Add To Cart</button>
      <button className='buy'> Buy Now</button>
    </div>
  </div>


  return (
    <div className='container'>
      {/* <div className='left'>
        <img src='https://images.unsplash.com/photo-1654471179701-e6dd7544ae5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80' alt='' />
      </div>
      <div className='right'>
        <div className='ctgry'><h4>Category:- food</h4></div>
        <h3>Title of the product</h3>
        <div className='price'><h4>Rs. 100</h4></div>
        <div className='rating'><h5>Rating:- 3</h5></div>
        <button className='cart'>Add To Cart</button>
        <button className='buy'> Buy Now</button>
      </div> */}
      {Object.keys(products).length > 0 ? holder : <h1>Loading...</h1>}
    </div>
  )
}

export default SelectedProducts