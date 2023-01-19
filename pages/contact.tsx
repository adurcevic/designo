import { GetStaticProps } from 'next';
import Section from '../components/Layout/Section/Section';
import LocationsNavWrapper from '../components/LocationsNav/LocationsNavWrapper/LocationsNavWrapper';
import * as LocationsNavCard from '../components/LocationsNav/LocationsNavCard/LocationsNavCard';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import LeafPattern from '../components/BgPatterns/LeafPattern/LeafPattern';
import * as ContactHero from '../components/SectionContact/ContactHero/ContactHero';
import ContactForm from '../components/SectionContact/ContactForm/ContactForm';
import { getGraphqlClient } from '../lib/graphql';
import { gql } from 'graphql-request';
import { GetContactQuery } from '../generated/graphql';

const query = gql`
  query getContact {
    contact {
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
          Hero {
            title
            text
          }
          LocationsNav {
            title
            btnText
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
        }
      }
    }
  }
`;

type Props = {
  meta: GenericPageMeta.Props;
  hero: ContactHero.Hero;
  locationsNav: LocationsNavCard.Props[];
};

const contact = ({ meta, hero, locationsNav }: Props) => {
  return (
    <>
      <GenericPageMeta.default {...meta} />
      <Section hasHero>
        <ContactHero.default {...hero}>
          <ContactForm />
        </ContactHero.default>
      </Section>
      <Section>
        <LocationsNavWrapper>
          {locationsNav.map((item, i) => (
            <LocationsNavCard.default key={i} {...item} />
          ))}
        </LocationsNavWrapper>
        <LeafPattern style={{ top: '90px', right: '-165px' }} />
      </Section>
    </>
  );
};

export default contact;

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();
  const data: GetContactQuery = await client.request(query);
  const page = data?.contact?.data?.attributes;

  const props = {
    meta: page?.Meta,
    hero: page?.Hero,
    locationsNav: page?.LocationsNav,
  };
  return {
    props,
    revalidate: 1,
  };
};
