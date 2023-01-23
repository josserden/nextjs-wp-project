import React from 'react';
import { gql } from '@apollo/client';
import client from 'client';
import PropTypes from 'prop-types';
import { cleanAndTransformData } from 'utils';
import { BlockRenderer } from 'components';

export default function Page({ blocks }) {
  console.log('PAGE PROPS', blocks);

  return <BlockRenderer blocks={blocks} />;
}

export const getStaticProps = async context => {
  console.log('CONTEXT', context);

  const uri = `/${context.params.slug.join('/')}/`;
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  const {
    nodeByUri: { title, blocksJSON },
  } = data;
  const blocks = cleanAndTransformData(blocksJSON);

  return {
    props: {
      blocks,
      title,
    },
  };
};

export const getStaticPaths = async () => {
  const {
    data: {
      pages: { nodes },
    },
  } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: nodes.map(({ uri }) => ({
      params: {
        slug: uri.substring(1).split('/'),
      },
    })),
    fallback: false,
  };
};
