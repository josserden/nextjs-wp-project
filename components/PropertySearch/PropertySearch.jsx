import { Pagination, Results } from 'components';
import { useEffect, useState } from 'react';
import { PAGE_SIZE } from 'utils/constants';

export const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const search = async () => {
      const response = await fetch('/api/search');
      const data = await response.json();

      console.log('SEARCH DATA: ', data);

      setProperties(data.properties);
      setTotalResults(data.total);
    };

    search();
  }, []);

  return (
    <>
      <Results properties={properties} />
      <Pagination totalPages={Math.ceil(totalResults / PAGE_SIZE)} />
    </>
  );
};
