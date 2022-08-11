import React from 'react'
import mealsImgae from '../../assets/images/meals.jpg';
import classes from './Header.module.css';

const Header=(props)=>{
return (
    <>
    <header className={classes.header}>
        <h1>react Meals</h1>
        <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImgae} alt="A table of delicious food items"></img>
    </div>
    </>
)
}


export default Header;