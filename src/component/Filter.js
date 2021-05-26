import React, {useState} from "react";
import {Link} from "react-router-dom";


const Filter = (props) => {
    const refreshPage = () => {
      window.location.reload(false);
    };

    return (
      <section className="filter">
        <div>
          <form>
            <input
              name="search"
              id="search"
              className="form-control icon"
              onChange={props.change}
              placeholder="  &#xf002;      Search for a country...."
              type="text"
            />
          </form>
        </div>
        <div className="region-filter">
          <select
            name="select"
            className="select"
            value={props.values}
            onChange={props.onchange}
          >
            <option value="" selected>
              Filter by region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    );   
}
export default Filter;