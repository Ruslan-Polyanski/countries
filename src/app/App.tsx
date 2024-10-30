import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_COUNTRIES } from '../apollo/getDataCountries';

const App: FC = () => {
  const { loading, error, data } = useQuery(ALL_COUNTRIES);
  console.log(data)
  return (
    <div></div>
  );
}

export { App }

