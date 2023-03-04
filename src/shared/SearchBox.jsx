import React, { useContext, useState } from 'react';
import { CoinsContexts } from '../Contexts/CoinsContext';

const SearchBox = () => {

    const {search,setSearch} = useContext(CoinsContexts);

    return (
        <div className='flex justify-center'>
            <input type="search" className='w-3/4 rounded-[0.25rem] px-2 py-1 outline-none bg-gray-100
                sm:w-2/4
            ' placeholder='Search...' value={search} onChange={event => setSearch(event.target.value)} />
        </div>
    );
};

export default SearchBox;