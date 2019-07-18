import React from 'react';
import CountryResults from '../Components/CountryResults.jsx';
import CountrySearch from '../Components/CountrySearch.jsx';

const CountriesContainer = () => {

    return (
            <div>
                <p>Project initiated</p>
                <CountrySearch/>
                <CountryResults/>
            </div>
    );
    
}
export default CountriesContainer;