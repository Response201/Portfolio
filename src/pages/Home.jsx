import React from 'react'
import { Background } from "../components/Background";
import './home.css'
const Home = ({color}) => {
  return (
    <article className='home___container'>


<section className='home___header_container'> 
<section className='header___content'> 
<h1>Frontend devoloper</h1>
<p>With a strong focus on user experience and modern technologies</p>
</section>
</section>

<section className='home___background_blob_container'> <Background color={color} /></section>







    </article>
  )
}

export default Home