import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faCar, faDog } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';
import { usePageContext } from 'context/page';

export const PropertyFeatures = () => {
  const { propertyFeatures } = usePageContext();

  return (
    <div className="container">
      <div className="mx-auto my-10 max-w-lg rounded-md bg-white p-5 text-center text-indigo-900 opacity-60">
        <div className="mb-4 grid grid-cols-2 gap-y-5">
          <span className="p-2 text-lg">
            <FontAwesomeIcon icon={faBed} /> {propertyFeatures.bedrooms}{' '}
            bedrooms
          </span>

          <span className="p-2 text-lg">
            <FontAwesomeIcon icon={faBath} /> {propertyFeatures.bathrooms}{' '}
            bathrooms
          </span>

          {!!propertyFeatures.petFriendly && (
            <span className="p-2 text-lg">
              <FontAwesomeIcon icon={faDog} /> pet friendly
            </span>
          )}

          {!!propertyFeatures.hasParking && (
            <span className="p-2 text-lg">
              <FontAwesomeIcon icon={faCar} /> parking available
            </span>
          )}
        </div>

        <h3 className="text-5xl font-bold">
          £{numeral(propertyFeatures.price).format('0,0')}
        </h3>
      </div>
    </div>
  );
};

PropertyFeatures.propTypes = {};

/*
bathrooms: 2,
  bedrooms: 4,
  hasParking: null,
  petFriendly: null,
  price: 2500000
*/
