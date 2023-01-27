import { PropertyCard } from 'components';
import PropTypes from 'prop-types';
import { propsCreator } from 'utils/propsCreator';

export const Results = ({ properties }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-5 p-5">
        {properties.map(property => {
          return (
            <PropertyCard
              key={property.databaseId}
              property={propsCreator(property)}
            />
          );
        })}
      </div>
    </div>
  );
};

Results.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
};
