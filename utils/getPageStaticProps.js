import { gql } from '@apollo/client';
import client from 'client';
import { cleanAndTransformData } from './cleanAndTransformData';
import { mapMainMenuItems } from './mapMainMenuItems';

export const getPageStaticProps = async context => {
  const uri = context.params?.slug ? `/${context.params.slug.join('/')}/` : '/';

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
            seo {
              title
              metaDesc
            }
          }
          ... on Property {
            id
            title
            blocksJSON
            seo {
              title
              metaDesc
            }
            propertyFeatures {
              bathrooms
              bedrooms
              hasParking
              petFriendly
              price
            }
          }
        }

        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
                label
              }
            }

            callToAction {
              destination {
                ... on Page {
                  uri
                }
              }
              label
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  const blocks = cleanAndTransformData(data.nodeByUri.blocksJSON);
  const mainMenuItems = mapMainMenuItems(
    data.acfOptionsMainMenu.mainMenu.menuItems,
  );
  const callToAction = {
    label: data.acfOptionsMainMenu.mainMenu.callToAction.label,
    destination: data.acfOptionsMainMenu.mainMenu.callToAction?.destination.uri,
  };
  const title = data.nodeByUri.title;
  const propertyFeatures = data.nodeByUri.propertyFeatures || null;
  const seo = data.nodeByUri.seo;

  return {
    props: {
      seo,
      title,
      blocks,
      mainMenuItems,
      callToAction,
      propertyFeatures,
    },
  };
};
