import client from 'client';
import { gql } from '@apollo/client';
import { PAGE_SIZE } from 'utils/constants';

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);
    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties(where: { offsetPagination: { size: ${PAGE_SIZE}, offset: ${
        ((filters.page || 1) - 1) * PAGE_SIZE
      } } }) {
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
