import React from 'react'

//! Phone Component

const Phone = ({ img, title, price, Rating }) => {
     // Attribute and Event Handler

     const clickHandler = (e) => {
          console.log(e)
          console.log(e.target)
          alert('Hello from clickhandler Example')
     }

     const complexExample = (price) => {
          console.log(price)
     }

     // const { img, title, price, Rating, children } = props
     return (
          <article className='Phone' onMouseOver={() => {
               console.log(title)
          }}>
               <img src={img} alt='' className='img-fluid' />
               <h1>{title}</h1>
               <h4>Price : {price}</h4>
               <h4>Rating : {Rating}</h4>
               <button type='button' onClick={clickHandler} className='btn btn-success'> Buy Now</button>
               <button type='button' onClick={() => complexExample(price)} className='btn btn-danger'>
                    Wishlist </button>
          </article>
     )
}


export default Phone
