import React,{useState} from 'react';
import Card from '../Card';
import SearchIcon from '@mui/icons-material/Search';
import FilteredProduct from '../FilteredProduct';
import { Row } from 'react-bootstrap';
import { products } from '../../../Data/data';


const Hero = () => {
const[value,setValue]=useState("");
  const onchange=(event)=>{
    setValue(event.target.value);
    console.log(value);
  }
  const onSearch=(key)=>{
    setValue(key);
  }
  return (
    <div className='home_page_hero'>
            <h1>Over <span className='styled_text'>65,000</span> Curated Design <br></br>Resources , <span className='styled_text'>Graphics & Websites</span> Templates </h1>
            <p className='hero_Description_p'>High-Quality Design Themes for Personal or Commercial use container 6k+ items in 100 categories....!!</p>
            <div className='hero_Searchbar'>
              <span>All Categories</span>
              <input type='text' placeholder='Search Products...' onChange={onchange} value={value}></input>
              <button  onClick={()=>onSearch(value)}><SearchIcon /></button>
            </div>
            <p className='products_Example_text'>Example : Mockups, PSD, Themes Designs, Image</p>
            <Row className='w-100'><FilteredProduct value={value} product={products} onSearch={onSearch} /></Row>  

            <Card></Card>
    </div>
  )
}

export default Hero