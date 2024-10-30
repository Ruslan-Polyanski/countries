import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_COUNTRIES } from '../apollo/getDataCountries';
import { Spinner } from '../shared/spinner/Spinner';

interface ICountry {
  capital: string;
  code: string;
  continent: {
    __typename: string;
    name: string;
  };
  currency: string;
  emoji: string;
  languages: [
    {__typename: string;
      name: string;
      native: string;
      rtl: boolean;
    }];
  name: string;
  native: string;
  phone: string;
  states: [];
  __typename: string;
}

interface IData {
  countries: Array<ICountry>
}

const App: FC = () => {
  const { loading, error, data } = useQuery<IData>(ALL_COUNTRIES);
  console.log(data?.countries)

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
      {data?.countries.map(country => country.name)}
    </div>
  );
}

export { App }

