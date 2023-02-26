import React from 'react';
import { Container} from 'react-bootstrap';
import Hero from '../Common/Home/Hero';
import Product from '../Common/Home/Product';
import Banner from '../Common/Home/Banner';
import TopProducts from '../Common/Home/TopProducts';
const Home = () => {
  
  return (
    <div className='home_page_container'>
      <Container>
        <Hero />
        <Product />
        <Banner />
        <TopProducts />
      </Container>
    </div>
  )
}

export default Home