import React from 'react';
import { hero } from '../../Data/data';

const Card = () => {
  return (
    <div className='hero_Cards_outer'>
        {
            hero.map((item)=>(
                <div className='product_card' key={item.id}>
                    <img src={item.cover} alt='' />
                    <div className='her_Card_info'>
                        <h5>{item.name}</h5>
                        <p>{item.items} Items</p>
                    </div>
                 </div>
            ))
        }
        
    </div>
    
  )
}

export default Card