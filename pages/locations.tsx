import { GetStaticProps } from 'next';
import * as Cta from '../components/Cta/Cta';
import Section from '../components/Layout/Section/Section';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import Button from '../components/Button/Button';
import * as LocationsCard from '../components/SectionLocations/LocationsCard/LocationsCard';
import LocationsWrapper from '../components/SectionLocations/LocationsWrapper/LocationsWrapper';
import { getGraphqlClient } from '../lib/graphql';
import { gql } from 'graphql-request';
import { GetLocationQuery } from '../generated/graphql';
import { useRouter } from 'next/router';

const query = gql`
  query getLocation {
    location {
      data {
        attributes {
          Meta {
            title
            description
            url
            image {
              data {
                attributes {
                  url
                }
              }
            }
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

const Locations = ({ meta, locations, cta }: Props) => {
  const router = useRouter();
  const query = router.query.name;

  return (
    <>
      <GenericPageMeta.default {...meta} />
      <Section hasHero>
        <LocationsWrapper>
          {locations.map((item, i) => (
            <LocationsCard.default key={i} {...item} query={query} />
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

export default Locations;

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();
  const data: GetLocationQuery = await client.request(query);
  const page = data?.location?.data?.attributes;

  const props = {
    meta: page?.Meta,
    locations: page?.Locations,
    cta: page?.Cta,
  };

  return {
    props,
    revalidate: 1,
  };
};
