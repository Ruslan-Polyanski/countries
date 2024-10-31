import { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_COUNTRIES } from '../apollo/getDataCountries';
import { Spinner } from '../shared/spinner/Spinner';
import { CardCountry } from '../shared/cardCountry/CardCountry';
import { ICountryData } from '../shared/types/global';
import { Input } from '../shared/input/Input';

interface IData {
  countries: Array<ICountryData>
}

const App: FC = () => {
  const { loading, error, data } = useQuery<IData>(ALL_COUNTRIES);
  const [countries, setCountries] = useState<Array<ICountryData> | undefined>([]);
  
  useEffect(() => {
    if(!loading) {
      setCountries(data?.countries)
    }
  }, [data])

  if(loading) {
    return <div className='spinner-box'>
      <Spinner />
    </div>;
  }

  if(error) {
    return <h2>Error...</h2>
  }

  return (
    <div>
      <Input />
      {countries?.map(country => {
        return (
          <CardCountry 
            key={country.name}
            emoji={country.emoji}
            capital={country.capital}
            currency={country.currency}
            name={country.name}
            phone={country.phone}
            continent={country.continent}
          />
        )
      })}
    </div>
  );
}

export { App }

