import React from 'react';
import { gql } from '@apollo/client';
import client from 'client';
import PropTypes from 'prop-types';
import { cleanAndTransformData } from 'utils';
import { Page } from 'components';
import { getPageStaticProps } from 'utils/getPageStatisProps';

export default Page;

export const getStaticProps = getPageStaticProps;
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
