import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import Filter from './Filter';


const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect( ()=>{
        const fetchCountryData = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)

        }
        fetchCountryData()
    }, [])



    const [search, setSearch] = useState('')
    const [filterCountries, setFilterCountries] = useState([]);
     const [region, setRegion] = useState("");
     

useEffect(()=>{
setFilterCountries( 
    countries.filter(country => {
        return (
          country.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
          country.region.toLowerCase().includes(region.toLocaleLowerCase())
        );
    } )
)
}, [search, countries, region])

   
    return (
      <div>
        <Filter
          change={(e) => setSearch(e.target.value)}
          values={region}
          onchange={(e) => setRegion(e.target.value)}
        />
        
        <div className="Countries">
          {filterCountries.map((country) => {
            const {
              numericCode,
              name,
              population,
              region,
              capital,
              flag,
            } = country;
            return (
              <article key={numericCode}>
                <div className="article-element">
                  <Link to={`/countries/${name}`}>
                    <img src={flag} alt={name} />
                  </Link>
                  <h4>{name}</h4>
                  <h3>
                    Population: <span>{population}</span>
                  </h3>
                  <h3>
                    Region: <span>{region}</span>
                  </h3>
                  <h3>
                    Capital: <span>{capital}</span>
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
}

export default Countries;