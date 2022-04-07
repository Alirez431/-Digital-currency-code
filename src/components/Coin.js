import React from 'react';
//styles
import styles from './coin.module.css'

const Coin = ({name, image , symbol ,pris ,market_cap , prisChange}) => {
    return (
        <div className={styles.coincontainer}>
            <img className={styles.coinimg} src={image} alt="name"/>
            <span className={styles.coinname}>{name}</span>
            <span className={styles.coinsymbol}>{symbol.toUpperCase()}</span>
            <span className={styles.coinpris}>${pris.toLocaleString()}</span>
            <span className={prisChange > 0 ? styles.greend : styles.rede}>${prisChange}</span>
            <span className={styles.market_cap}>${market_cap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;