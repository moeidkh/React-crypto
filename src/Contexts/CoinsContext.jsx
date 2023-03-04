import React, { createContext, useEffect, useState } from 'react';
import { getCoins } from '../services/API';

export const CoinsContexts = createContext();

const CoinsContext = ({children}) => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(()=>{
        const fetchApi = async () => {
            setData(await getCoins())
        }
        fetchApi()
    },[])
    return (
        <CoinsContexts.Provider value={{data, setData, search, setSearch}}>
            {children}
        </CoinsContexts.Provider>
    );
};

export default CoinsContext;