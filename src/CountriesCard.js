import React from "react";
import number from "easy-number-formatter";
import { Link } from "react-router-dom";

const CountriesCard = ({
  name,
  capital,
  flags,
  languages,
  population,
  currencies,
}) => {
  return (
    <Link to={capital}>
      <div key={name} className="country">
        <h2>{name}</h2>
        <p>{capital}</p>
        <img src={flags.png} alt="flag" />
        <p className="population">
          Population: {number.formatNumber(population)}
        </p>
        <p>
          Language(s):
          {languages.map((lang, i) => (
            <span key={i}>{lang.name} </span>
          ))}
        </p>
        <p>
          Currencies:{" "}
          {currencies.map((curr, i) => (
            <span key={i}>
              {curr.name} - {curr.symbol}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default CountriesCard;
