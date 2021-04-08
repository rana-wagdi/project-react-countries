import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../country.css';

const Country = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();
    useEffect(() => {
      const fetchCountryData = async () => {
        const response = await fetch(
          `https://restcountries.eu/rest/v2/name/${name}`
        );
        const country = await response.json();
        setCountry(country);
      };
      fetchCountryData();
    }, []);
    return (
      <div>
        <Link to="/" className="btn ">
          <i className="fas fa-arrow-left icon">  </i>  Back
        </Link>
         <section className="country">
                {country.map((c)=>{
                    const{numericCode, flag, name, nativeName, population, region,subregion, capital, topLevelDomain, currencies, languages, borders} = c

                    return (
                      <article key={numericCode}>
                        <div className="country-inner">
                          <div className="flag">
                            <img
                              src={flag}
                              alt={name}
                              className="img-country"
                            />
                          </div>

                          <div className="country-details">
                            <div className="details">
                              <h2>{name}</h2>
                              <h5>
                                Native Name: <span> {nativeName}</span>
                              </h5>
                              <h5>
                                Population: <span> {population}</span>
                              </h5>
                              <h5>
                                Region: <span> {region}</span>
                              </h5>
                              <h5>
                                Sub Region: <span> {subregion} </span>
                              </h5>
                              <h5>
                                Capital: <span> {capital}</span>{" "}
                              </h5>
                            </div>
                            <div className="ab">
                              <h5>
                                Top Level Domain: <span> {topLevelDomain}</span>
                              </h5>
                              <h5>
                                Currencies:<span> {currencies[0].name}</span>
                              </h5>
                              <h5>
                                Languages: <span> {languages[0].name}</span>
                              </h5>
                            </div>
                            <div className="border-section">
                              <h3>Border Countries: </h3>
                              <div className="borders">
                                {borders.map((border) => {
                                  return (
                                    <ul key={border}>
                                      <li>{border}</li>
                                    </ul>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    );

                })}

            </section>
          
        
      </div>
    );
}
export default Country;