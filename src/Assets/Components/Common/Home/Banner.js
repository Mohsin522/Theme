import React from 'react';
import { banner } from '../../../Data/data';

const Banner = () => {
  return (
    <div className='banner_outer'>
      {
        banner.map((item)=>(
            <div className='banner_post'>
                <div className='banner_img'>
                    <img src={item.cover}></img>
                </div>
                <div className='banner_info'>
                    <h3 className='item_title1'>{item.title1}</h3>
                    <h4 className='item_title2'>{item.title2}</h4>
                    <p className='item_desc'>{item.desc}</p>
                <button className='banner_shop'>Shop Now</button>

                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Banner