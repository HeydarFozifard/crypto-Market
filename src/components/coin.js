import React from 'react';
import Styles from "./Coin.module.css"

const Coin = ({coinData}) => {
    const{name,image,symbol,market_cap,market_cap_change_percentage_24h,current_price}=coinData
    return (
        <div className={Styles.container} >
            <img src={image} alt="coin img" style={{width:"30px",height:"30px"}}/>
            <span className={Styles.name}> {name} </span>
            <span className={Styles.symbol}> {symbol.toUpperCase()}</span>
            <span className={Styles.currentPrice}> $  {current_price.toLocaleString()} </span>
            <span className={market_cap_change_percentage_24h > 0  ? Styles.greenPriceChange : Styles.redPriceChange } > {market_cap_change_percentage_24h.toFixed(2).toLocaleString()} </span>
            <span > $ {market_cap.toLocaleString()} </span>

        </div>
    );
};

export default Coin;