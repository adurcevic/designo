import { GetStaticProps } from 'next';
import * as Cta from '../components/Cta/Cta';
import Section from '../components/Layout/Section/Section';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import Button from '../components/Button/Button';
import * as LocationsCard from '../components/SectionLocations/LocationsCard/LocationsCard';
import LocationsWrapper from '../components/SectionLocations/LocationsWrapper/LocationsWrapper';

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
          <Button type="Link" slug="/contact" text="Get in touch" />
        </Cta.default>
      </Section>
    </>
  );
};

export default locations;

export const getStaticProps: GetStaticProps = () => {
  const props = {
    meta: {
      title: 'About us',
      description:
        'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
    },
    locations: [
      {
        country: 'Canada',
        office: 'Designo Central Office',
        street: '3886 Wellington Street',
        city: 'Toronto, Ontario M9C 3J5',
        phone: '+1 253-863-8967',
        email: 'contact@designo.co',
        position: {
          lat: 43.64412110445435,
          lng: -79.39452330748348,
        },
      },
      {
        country: 'Australia',
        office: 'Designo AU Office',
        street: '19 Balonne Street',
        city: 'New South Wales 2443',
        phone: '(02) 6720 9092',
        email: 'contact@designo.au',
        position: {
          lat: -28.03308309326044,
          lng: 148.58589995767144,
        },
      },
      {
        country: 'United Kingdom',
        office: 'Designo UK Office',
        street: '13 Colorado Way',
        city: 'Rhyd-y-fro SA8 9GA',
        phone: '078 3115 1400',
        email: 'contact@designo.uk',
        position: {
          lat: 51.72811555746619,
          lng: -3.8606069738100377,
        },
      },
    ],
    cta: {
      title: 'Let`s talk about your project',
      text: 'Ready to take it to the next level? Contact us today and find out how our expertiese can help your business grow.',
    },
  };

  return {
    props,
    revalidate: 1,
  };
};
