import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'
import {Type} from '../../Utility/actiontype'



function ProductCard({product, flex, renderDesc,renderAdd}) {
   const [state, dispatch] = useContext(DataContext);
  if (!product) {
    return <div>Loading...</div>
  }
  const {image, title, id, rating, price,description} =product; 
  // const {rate=0, count=0}=rating;

  const addToCart = () => {
    dispatch({
      type: Type.ADD_To_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && 
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        }
      </div>
    </div>
  );
}

export default ProductCard
