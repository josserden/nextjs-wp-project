import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { Filters, Pagination, Results } from 'components';
import { PAGE_SIZE } from 'utils/constants';

export const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const router = useRouter();

  const search = async () => {
    const { page, petFriendly, hasParking, minPrice, maxPrice } =
      queryString.parse(window.location.search);
    const filters = {};

    if (petFriendly === 'true') {
      filters.petFriendly = true;
    }
    if (hasParking === 'true') {
      filters.hasParking = true;
    }
    if (minPrice) {
      filters.minPrice = parseInt(minPrice);
    }
    if (maxPrice) {
      filters.maxPrice = parseInt(maxPrice);
    }

    const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        page: parseInt(page) || '1',
        ...filters,
      }),
    });
    const data = await response.json();

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

  const handleSearch = async ({
    petFriendly,
    hasParking,
    minPrice,
    maxPrice,
  }) => {
    await router.push(
      `${router.query.slug.join(
        '/',
      )}?page=1&petFriendly=${petFriendly}&hasParking=${hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      null,
      {
        shallow: true,
      },
    );

    search();
  };

  return (
    <section className="py-10">
      <Filters onSearch={handleSearch} />
      <Results properties={properties} />
      <Pagination
        totalPages={Math.ceil(totalResults / PAGE_SIZE)}
        onPageClick={handlePageClick}
      />
    </section>
  );
};
