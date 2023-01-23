import React from 'react';
import PropTypes from 'prop-types';
import client from 'client';
import { gql } from '@apollo/client';
import { BlockRenderer, MainMenu } from 'components';
import { cleanAndTransformData } from 'utils';
import { mapMainMenuItems } from 'utils/mapMainMenuItems';

export default function Home(props) {
  return (
    <>
      <MainMenu items={props.mainMenuItems} />
      <BlockRenderer blocks={props.blocks} />
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocksJSON
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
          }
        }
      }
    `,
  });

  const blocks = cleanAndTransformData(data.nodeByUri.blocksJSON);
  const mainMenuItems = mapMainMenuItems(
    data.acfOptionsMainMenu.mainMenu.menuItems,
  );

  return {
    props: {
      mainMenuItems,
      blocks,
    },
  };
};

Home.propTypes = {
  blocks: PropTypes.array.isRequired,
};
