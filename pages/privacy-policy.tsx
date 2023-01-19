import { GetStaticProps } from 'next';
import { getGraphqlClient } from '../lib/graphql';
import { gql } from 'graphql-request';
import { GetPrivacyPolicyQuery } from '../generated/graphql';
import * as TextualArticle from '../components/TextualArticle/TextualArticle';
import Section from '../components/Layout/Section/Section';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';

const query = gql`
  query getPrivacyPolicy {
    privacyPolicy {
      data {
        attributes {
          Meta {
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          PrivacyArticle {
            title
            date
            text
          }
        }
      }
    }
  }
`;

type Props = {
  meta: GenericPageMeta.Props;
  privacyArticle: TextualArticle.Props;
};
const privacyPolicy = ({ meta, privacyArticle }: Props) => {
  return (
    <>
      <GenericPageMeta.default {...meta} />
      <Section>
        <TextualArticle.default {...privacyArticle} />
      </Section>
    </>
  );
};

export default privacyPolicy;

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();
  const data: GetPrivacyPolicyQuery = await client.request(query);
  const page = data.privacyPolicy?.data?.attributes;

  const props = {
    meta: page?.Meta,
    privacyArticle: page?.PrivacyArticle,
  };
  return {
    props,
    revalidate: 1,
  };
};
