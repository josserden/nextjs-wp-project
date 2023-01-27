import client from 'client';
import { gql } from '@apollo/client';

const handler = async (req, res) => {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties {
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
    });
  } catch (error) {
    console.error('ERROR', error);
  }
};

export default handler;
