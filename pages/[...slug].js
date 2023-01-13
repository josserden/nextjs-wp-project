import React from 'react';
import PropTypes from 'prop-types';
import { gql } from '@apollo/client';
import client from 'client';

export default function Page({ data }) {
  console.log('PAGE', data);

  return <div>page</div>;
}

export const getStaticProps = async () => {
  return {
    props: {
      data: {},
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
