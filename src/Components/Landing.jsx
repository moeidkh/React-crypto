import React, { useContext, useEffect } from 'react';

// components
import Crypto from '../shared/Crypto';
import SearchBox from '../shared/SearchBox';

// contexts
import { CoinsContexts } from '../Contexts/CoinsContext';
import Loading from '../shared/Loading';

const Landing = () => {
    const { data, setData, search } = useContext(CoinsContexts)

    const searchDatas = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="
            flex flex-col align-top gap-12 pt-16
            w-7/8 px-8
            sm:w-6/7
            md:w-5/6
            lg:w-4/5
            xl:w-3/5
            ">
            <SearchBox setData={setData} data={data} />
            {
                !data.length ?
                        <Loading />
                        :
                    <div className='flex flex-col align-top justify-center rounded-[0.5rem] overflow-hidden bg-gray-100 gap-8 py-8'>
                        {searchDatas.map(item => <Crypto
                            image={item.image}
                            title={item.name}
                            symbol={item.symbol}
                            price={item.current_price.toLocaleString()}
                            percent={item.price_change_percentage_24h}
                            volume={item.market_cap.toLocaleString()}
                            key={item.id}
                        />)}
                    </div>
            }
        </div>
    );
};

export default Landing;