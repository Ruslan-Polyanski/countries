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
  const [ countries, setCountries ] = useState<Array<ICountryData> | undefined>([]);
  const [ countryIndex, setContryIndex ] = useState<number>(-1);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const codeCountry = event.target.value;
    
    const index = countries?.findIndex((country) => {
      return country.code === codeCountry.toUpperCase();
    })

    if(index !== undefined && index >= 0) {
      setContryIndex(index)
    } else {
      setContryIndex(-1)
    }

  }
  
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

  let dataPage;

  if(countryIndex < 0) {
    dataPage = countries?.map(country => {
      return (
        <CardCountry 
          key={country.name}
          emoji={country.emoji}
          capital={country.capital}
          currency={country.currency}
          name={country.name}
          phone={country.phone}
          continent={country.continent}
          languages={country.languages}
        />
      )
    })
  } else if(countries !== undefined) {
    dataPage = <CardCountry 
        key={countries[countryIndex].name}
        emoji={countries[countryIndex].emoji}
        capital={countries[countryIndex].capital}
        currency={countries[countryIndex].currency}
        name={countries[countryIndex].name}
        phone={countries[countryIndex].phone}
        continent={countries[countryIndex].continent}
        languages={countries[countryIndex].languages}
      />
  }

  return (
    <div>
      <div className='input-box'>
        <Input handleInput={handleInput} />
      </div>
      <div className='data-box'>
        {dataPage}
      </div>
    </div>
  );
}

export { App }

