import React from 'react';
import PropTypes from 'prop-types';
import client from 'client';
import { gql } from '@apollo/client';
import { BlockRenderer } from 'components';
import { cleanAndTransformData } from 'utils';

export default function Home({ blocks }) {
  console.log('HOME PROPS', blocks);

  return <BlockRenderer blocks={blocks} />;
}

export const getStaticProps = async () => {
  const {
    data: {
      nodeByUri: { blocksJSON },
    },
  } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
  });

  const blocks = cleanAndTransformData(blocksJSON);

  return {
    props: {
      blocks,
    },
  };
};

Home.propTypes = {
  blocks: PropTypes.array.isRequired,
};

/*
Hot Dang Homes is a West Wales based estate agent with a passion for people and property.
*/
