import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { Filters, Pagination, Results } from 'components';
import { PAGE_SIZE } from 'utils/constants';

export const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const router = useRouter();

  const search = async () => {
    const { page } = queryString.parse(window.location.search);
    const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ page: parseInt(page) || '1' }),
    });
    const data = await response.json();

    console.log('PAGE: ', page);

    console.log('SEARCH DATA: ', data);

    setProperties(data.properties);
    setTotalResults(data.total);
  };

  useEffect(() => {
    search();
  }, []);

  const handlePageClick = async pageNumber => {
    await router.push(
      `${router.query.slug.join('/')}?page=${pageNumber}`,
      null,
      {
        shallow: true,
      },
    );

    search();
  };

  return (
    <section className="py-10">
      <Filters />
      <Results properties={properties} />
      <Pagination
        totalPages={Math.ceil(totalResults / PAGE_SIZE)}
        onPageClick={handlePageClick}
      />
    </section>
  );
};
