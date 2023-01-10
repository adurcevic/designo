import { GetStaticProps } from 'next';
import * as Cta from '../components/Cta/Cta';
import Section from '../components/Layout/Section/Section';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import Button from '../components/Button/Button';
import * as LocationsCard from '../components/SectionLocations/LocationsCard/LocationsCard';
import LocationsWrapper from '../components/SectionLocations/LocationsWrapper/LocationsWrapper';
import { getGraphqlClient } from '../lib/graphql';
import { gql } from 'graphql-request';

const query = gql`
  query getLocation {
    location {
      data {
        attributes {
          Meta {
            title
            description
          }
          Locations {
            country
            office
            street
            city
            phone
            email
            lat
            lng
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
  locations: LocationsCard.Props[];
  cta: Cta.Props;
};

const locations = ({ meta, locations, cta }: Props) => {
  return (
    <>
      <GenericPageMeta.default {...meta} />
      <Section hasHero>
        <LocationsWrapper>
          {locations.map((item, i) => (
            <LocationsCard.default key={i} {...item} />
          ))}
        </LocationsWrapper>
      </Section>
      <Section hasCta>
        <Cta.default {...cta}>
          <Button kind="Link" slug="/contact" text="Get in touch" />
        </Cta.default>
      </Section>
    </>
  );
};

export default locations;

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();
  const data = await client.request(query);
  const { Meta, Locations, Cta } = data.location.data.attributes;

  const props = {
    meta: { ...Meta },
    locations: Locations,
    cta: { ...Cta },
  };

  return {
    props,
    revalidate: 1,
  };
};
