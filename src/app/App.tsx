import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_COUNTRIES } from '../apollo/getDataCountries';
import { Spinner } from '../shared/spinner/Spinner';

const App: FC = () => {
  const { loading, error, data } = useQuery(ALL_COUNTRIES);
  console.log(data)

  if(loading) {
    return <div className='spinner-box'>
      <Spinner />
    </div>;
  }

  if(error) {
    return <h2>Error...</h2>
  }

  return (
    <div></div>
  );
}

export { App }

