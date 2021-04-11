import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { phones } from './phones'
import Book from './Phone'
// import Heading from './Heading'

// setup arrays


     const PhoneList = () => {
     return (
          <section className='phonelist'>
               {phones.map((phone , index) => {
                    return (
                         <Book key={index} {...phone}>
                         </Book>
                    )
               })}
          </section>
     )
}



export default PhoneList
