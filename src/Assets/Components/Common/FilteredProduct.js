import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';

const FilteredProduct = ({value, product , onSearch}) => {
  return (
    <div className='product_card_outer filtered_product'>
        {product.filter((items)=>{
            const searchKey=value.toLowerCase();
            const title=items.title.toLowerCase();
            const author=items.author.toLowerCase();
            const price=items.price.toString().toLowerCase();

            return searchKey && title !=searchKey && title.includes(searchKey) 
        }).slice(0,10).map((item)=>(
            <div className='col-4'>
                <div className='product_card' key={item.id} >
                <div className='img'>
                    <img src={item.cover}></img>
                    <div className='overlay'>
                        <button type='submit'>
                            <ShoppingBagIcon />
                        </button>
                        <button type='submit'>
                            <FavoriteBorderIcon />
                        </button>
                        <button >
                            <SearchIcon />
                        </button>
                    </div>
                </div>
                <div className='product_Detail'>
                    <h5>{item.title}</h5>
                    <p>{item.author}</p>
                    <p className='price'>${item.price}</p>
                </div>
            </div>
            </div>
        ))}
        
    </div>
  )
}

export default FilteredProduct