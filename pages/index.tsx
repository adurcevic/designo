import * as Hero from '../components/Hero/Hero';
import Section from '../components/Layout/Section/Section';
import * as DesignCard from '../components/SectionDesign/DesignCard';
import DesignSection from '../components/SectionDesign/DesignSection';
import FeaturesSection from '../components/SectionFeatures/FeaturesSection';
import * as FeatureCard from '../components/SectionFeatures/FeatureCard';
import LeafPattern from '../components/BgPatterns/LeafPattern/LeafPattern';
import * as Cta from '../components/Cta/Cta';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import { GetStaticProps } from 'next';
import { getGraphqlClient } from '../lib/graphql';
import { gql } from 'graphql-request';
import { GetHomeQuery } from '../generated/graphql';

const query = gql`
  query getHome {
    home {
      data {
        attributes {
          Meta {
            title
            description
          }
          Hero {
            title
            text
            btnText
            image {
              data {
                attributes {
                  width
                  height
                  url
                }
              }
            }
          }
          Designs {
            title
            text
            slug
            imgMobile {
              data {
                attributes {
                  url
                }
              }
            }
            imgTablet {
              data {
                attributes {
                  url
                }
              }
            }
            imgDesktop {
              data {
                attributes {
                  url
                }
              }
            }
          }
          Features {
            title
            text
            image {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
          Cta {
            title
            text
            btnText
          }
        }
      }
    }
  }
`;

type Props = {
  meta: GenericPageMeta.Props;
  hero: Hero.Props;
  design: DesignCard.Props[];
  features: FeatureCard.Props[];
  cta: Cta.Props;
};

export default function Home({ meta, hero, design, features, cta }: Props) {
  return (
    <div>
      <GenericPageMeta.default {...meta} />
      <Section hasHero>
        <Hero.default {...hero} />
        <LeafPattern style={{ top: '320px', left: '-165px' }} />
      </Section>
      <Section>
        <DesignSection>
          {design.map((item, i) => (
            <DesignCard.default key={i} {...item} />
          ))}
        </DesignSection>
      </Section>
      <Section>
        <FeaturesSection>
          {features.map((item, i) => (
            <FeatureCard.default key={i} {...item} />
          ))}
        </FeaturesSection>
        <LeafPattern
          rotation="rotate(180)"
          style={{ right: '-165px', top: '124px' }}
        />
      </Section>
      <Section hasCta>
        <Cta.default {...cta} />
      </Section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();
  const data: GetHomeQuery = await client.request(query);

  const page = data?.home?.data?.attributes;

  const props = {
    meta: page?.Meta,
    hero: page?.Hero,
    design: page?.Designs,
    features: page?.Features,
    cta: page?.Cta,
  };
  return {
    props,
    revalidate: 1,
  };
};
