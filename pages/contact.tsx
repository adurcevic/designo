import { GetStaticProps } from 'next';
import Section from '../components/Layout/Section/Section';
import LocationsNavWrapper from '../components/LocationsNav/LocationsNavWrapper/LocationsNavWrapper';
import * as LocationsNavCard from '../components/LocationsNav/LocationsNavCard/LocationsNavCard';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import LeafPattern from '../components/BgPatterns/LeafPattern/LeafPattern';
import * as ContactHero from '../components/SectionContact/ContactHero/ContactHero';
import ContactForm from '../components/SectionContact/ContactForm/ContactForm';

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

export const getStaticProps: GetStaticProps = () => {
  const props = {
    meta: {
      title: 'Contact us',
      description:
        'Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.',
    },
    hero: {
      title: 'Contact us',
      text: 'Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.',
    },
    locationsNav: [
      {
        imgSrc: '/assets/illustration-canada.svg',
        title: 'Canada',
        btnText: 'See location',
      },
      {
        imgSrc: '/assets/illustration-australia.svg',
        title: 'Australia',
        btnText: 'See location',
      },
      {
        imgSrc: '/assets/illustration-united-kingdom.svg',
        title: 'United Kingdom',
        btnText: 'See location',
      },
    ],
  };
  return {
    props,
    revalidate: 1,
  };
};
