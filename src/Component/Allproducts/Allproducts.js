import React, { useEffect } from 'react'
import '../Allproducts/Allproducts.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setProducts} from '../../Redux/Action/Action'

function Allproducts() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect( () => {
        axios.get("https://fakestoreapi.com/products")
        .then(function(response){
            dispatch(setProducts(response.data))
        })
        .catch( function(error) {
            console.log(error)
        });
    }, [])

    const state= useSelector(state=>state.allproducts.products)
    console.log(state)
    
    const handler = (e)=> {
        navigate(`/product/${e.target.id}`)
    }

    const hold = state.map( (elem, index) => {
        return <div className='card' key={index} id={index} onClick={handler}>
        <div className='image' id={elem.id}>
            <img id={elem.id} src={elem.image} alt='' />
        </div>
        <div className='details' id={elem.id}>
            <h5>{elem.title}</h5>
            <p>{elem.price}</p>
            <p>{elem.rating.rate}</p>
        </div>
    </div>
    } )

    return (
        <div className='allproducts'>
        
            {state.length>0 ? hold: <h1 className='loading'>Loading...</h1>}
        
        </div>
    )
}

export default Allproducts