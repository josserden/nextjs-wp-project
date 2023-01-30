import {
  faBathtub,
  faBed,
  faParking,
  faDog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import numeral from 'numeral';
import PropTypes from 'prop-types';

export const PropertyCard = ({ property }) => {
  const {
    destination,
    title,
    image,
    bedrooms,
    bathrooms,
    hasParking,
    petFriendly,
    price,
  } = property;

  return (
    <Link href={destination}>
      <a className="grid grid-cols-1 gap-4 rounded-lg border bg-slate-50 p-4 shadow-sm shadow-indigo-100 transition-colors hover:bg-slate-100 ">
        <div className="flex h-[250px] w-full overflow-hidden rounded-md border shadow">
          <Image
            src={image}
            alt={title}
            width={450}
            height={250}
            objectFit="cover"
          />
        </div>

        <dl>
          <div>
            <dt className="sr-only">Price</dt>
            <dd className="text-sm text-gray-500">
              €{numeral(price).format('0,0')}
            </dd>
          </div>

          <div>
            <dt className="sr-only">Address</dt>
            <dd className="font-medium">{title}</dd>
          </div>
        </dl>

        <ul className="flex flex-wrap gap-5">
          <li className="flex items-center gap-4 text-xs">
            <FontAwesomeIcon icon={faBathtub} className="text-indigo-700" />
            <div className="gap-1 sm:inline-flex sm:shrink-0 sm:items-center">
              <p className="font-bold text-gray-500">Bathroom:</p>
              <p className="font-medium">
                {bathrooms > 1 ? `${bathrooms} rooms` : `${bathrooms} room`}
              </p>
            </div>
          </li>

          <li className="flex items-center gap-4 text-xs">
            <FontAwesomeIcon icon={faBed} className="text-indigo-700" />
            <div className="gap-1 sm:inline-flex sm:shrink-0 sm:items-center">
              <p className="font-bold text-gray-500">Bedroom:</p>
              <p className="font-medium">
                {bedrooms > 1 ? `${bedrooms} rooms` : `${bedrooms} room`}
              </p>
            </div>
          </li>

          {hasParking && (
            <li className="flex items-center gap-4 text-xs">
              <FontAwesomeIcon icon={faParking} className="text-indigo-700" />
              <div className="gap-1 sm:inline-flex sm:shrink-0 sm:items-center">
                <p className="font-bold text-gray-500">Parking available</p>
              </div>
            </li>
          )}

          {petFriendly && (
            <li className="flex items-center gap-4 text-xs">
              <FontAwesomeIcon icon={faDog} className="text-indigo-700" />
              <div className="gap-1 sm:inline-flex sm:shrink-0 sm:items-center">
                <p className="font-bold text-gray-500">Pet friendly</p>
              </div>
            </li>
          )}
        </ul>
      </a>
    </Link>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    destination: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    hasParking: PropTypes.bool,
    petFriendly: PropTypes.bool,
  }).isRequired,
};
