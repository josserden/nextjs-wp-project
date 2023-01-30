import client from 'client';
import { gql } from '@apollo/client';
import { PAGE_SIZE } from 'utils/constants';

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

    let hasParkingFilter = ``;
    let petFriendlyFilter = ``;
    let minPriceFilter = ``;
    let maxPriceFilter = ``;

    if (filters.hasParking) {
      hasParkingFilter = `
      {
        key: "has_parking"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.petFriendly) {
      hasParkingFilter = `
      {
        key: "pet_friendly"
        compare: EQUAL_TO
        value: "1"
      },
      `;
    }

    if (filters.minPrice) {
      minPriceFilter = `
      {
        key: "price"
        compare: GREATER_THAN_OR_EQUAL_TO
        value: "${filters.minPrice}"
        type: NUMERIC
      }
      `;
    }
    if (filters.maxPrice) {
      maxPriceFilter = `
      {
        key: "price"
        compare: LESS_THAN_OR_EQUAL_TO
        value: "${filters.maxPrice}"
        type: NUMERIC
      }
      `;
    }

    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties(where: {
            offsetPagination: { size: ${PAGE_SIZE}, offset: ${
        ((filters.page || 1) - 1) * PAGE_SIZE
      } }
        metaQuery: {
        relation: AND
        metaArray: [
          ${hasParkingFilter}
          ${petFriendlyFilter}
          ${minPriceFilter}
          ${maxPriceFilter}
        ]}
    }) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              title
              uri
              propertyFeatures {
                bathrooms
                bedrooms
                hasParking
                petFriendly
                price
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `,
    });

    return res.status(200).json({
      properties: data.properties.nodes,
      total: data.properties.pageInfo.offsetPagination.total,
    });
  } catch (error) {
    console.error('ERROR', error);
  }
};

export default handler;
