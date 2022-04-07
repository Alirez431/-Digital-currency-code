import React, {useEffect , useState} from 'react';
//api
import { getCoin } from '../services/api';
//components
import Loader from './Loader.js'
import Coin from './Coin';
//styles
import styles from "./loading.module.css"
const Landing = () => {
    const [coins ,setCoins] = useState([]);
    const [search , setSearch] = useState("");
    useEffect(() =>{

        const fetchApi = async () => {
           const data = await getCoin()
        console.log(data);
        setCoins(data);
        }
        fetchApi();
    },[])
    const searchHandeler = event => {
        setSearch(event.target.value)
    }
    const searchedConins = coins.filter(coins => coins.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className={styles.container} >

        
            <input type="text" placeholder="Search"  value={search} onChange={searchHandeler} />
        {
            coins.length ? 
            <div className={styles.body}>
                {
                   searchedConins.map(coins => <Coin
                        key={coins.id}
                        name={coins.name}
                        image={coins.image}
                        symbol={coins.symbol}
                        pris={coins.current_price}
                        market_cap={coins.market_cap}
                        prisChange={coins.price_change_percentage_24h}
                        />)
                }
            </div> : <Loader />

        }

            
        
        </div>
    );
};

export default Landing;