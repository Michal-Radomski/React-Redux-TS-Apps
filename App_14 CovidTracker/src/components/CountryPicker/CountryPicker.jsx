import React from "react";
import {NativeSelect, FormControl} from "@material-ui/core";

import {fetchCountries} from "../../api";
import styles from "./CountryPicker.module.scss";

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);
  // console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
