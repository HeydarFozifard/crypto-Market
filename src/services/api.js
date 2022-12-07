import React from 'react';
import axios from "axios"

const MainUrl="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const api = async () => {
   
    const response= await axios.get(MainUrl)
    return  response.data;


};

export {api}