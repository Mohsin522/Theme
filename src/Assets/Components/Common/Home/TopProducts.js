import React,{useState,useEffect,useMemo} from 'react';
import ProductItem from './ProductItem';
import Heading from '../Heading';
import { topProducts } from '../../../Data/data';



const TopProducts = () => {
    const[data,setData]=useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    
    function getFilteredList() {
        if (!selectedCategory) {
          return data;
        }
        return data.filter((item) => item.category === selectedCategory);
      }
      useEffect(()=>{
        setData(topProducts)
      },[])
      var featuredList=useMemo(getFilteredList, [selectedCategory, data]);
  return (
    <div>
       <div className='top_header'>
        <Heading title="Top Selling Products" desc="Meet our newbies! The latest templates uploaded to the marketplace." />
        <div className='top_buttons_list'>
            <button onClick={()=>setSelectedCategory("")}>All</button>
            <button onClick={()=>setSelectedCategory("icons")}>Icons</button>
            <button onClick={()=>setSelectedCategory("web theme")}>Web Theme</button>
            <button onClick={()=>setSelectedCategory("images stocks")}>Image Stocks</button>
            <button onClick={()=>setSelectedCategory("mockups")}>Mockups</button>
        </div>
       </div>
       <ProductItem data={featuredList} />
    </div>
  )
}

export default TopProducts