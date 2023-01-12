import React from 'react';
import PropTypes from 'prop-types';
import client from 'client';
import { gql } from '@apollo/client';

const Home = ({ data }) => {
  console.log(data);

  return <div>Next JS &amp; WordPress course.</div>;
};

export default Home;

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

  return {
    props: {
      data: JSON.parse(blocksJSON),
    },
  };
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
};
