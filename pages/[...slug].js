import { gql } from '@apollo/client';
import client from 'client';
import { Page } from 'components/Page';
import { getPageStaticProps } from 'utils/getPageStaticProps';

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
        properties {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: [...data.pages.nodes, ...data.properties.nodes]
      .filter(({ uri }) => uri !== '/')
      .map(({ uri }) => ({
        params: {
          slug: uri.substring(1).split('/'),
        },
      })),
    fallback: false,
  };
};
