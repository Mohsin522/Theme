import React, { useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    
  };

const ProductItem = ({data}) => {
    const [open, setOpen] = useState(false);
    const[imgg,setImg]=useState("");
    const handleOpen = (src) => {
        setOpen(true);
        setImg(src);
    }
    const handleClose = () => {setOpen(false);}
    
  return (
    <div className='product_card_outer'>
        {data.map((item)=>(
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
                        <button  onClick={()=> handleOpen(item.cover)}>
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
        ))}
        <Modal  open={open} onClose={handleClose} className="modal_tag" >
            <Box sx={style} className="modal_box">
                <img src={imgg} className="modal_img"></img>
                <button className='close_icon' type='submit' onClick={handleClose}><CloseIcon /></button>
            </Box>
        </Modal>
    </div>
    
  )
}

export default ProductItem