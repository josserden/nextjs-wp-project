import { Results } from 'components';
import { useEffect, useState } from 'react';

export const PropertySearch = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await fetch('/api/search');
      const data = await response.json();

      setProperties(data.properties);
    };

    search();
  }, []);

  return <Results properties={properties} />;
};
