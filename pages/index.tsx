import Head from 'next/head';
import Button from '../components/Button/Button';
import Hero from '../components/Hero/Hero';
import Section from '../components/Layout/Section/Section';
import DesignCard from '../components/SectionDesign/DesignCard';
import DesignSection from '../components/SectionDesign/DesignSection';
import FeaturesSection from '../components/SectionFeatures/FeaturesSection';
import FeatureCard from '../components/SectionFeatures/FeatureCard';

const designData = [
  {
    title: 'Web design',
    text: 'View Projects',
    imgMobile: '/assets/home/mobile/image-web-design.jpg',
    imgTablet: '/assets/home/tablet/image-web-design.jpg',
    imgDesktop: '/assets/home/desktop/image-web-design-large.jpg',
  },
  {
    title: 'App design',
    text: 'View Projects',
    imgMobile: '/assets/home/mobile/image-app-design.jpg',
    imgTablet: '/assets/home/tablet/image-app-design.jpg',
    imgDesktop: '/assets/home/desktop/image-app-design.jpg',
  },
  {
    title: 'Graphic design',
    text: 'View Projects',
    imgMobile: '/assets/home/mobile/image-graphic-design.jpg',
    imgTablet: '/assets/home/tablet/image-graphic-design.jpg',
    imgDesktop: '/assets/home/desktop/image-graphic-design.jpg',
  },
];

const featuresData = [
  {
    imgSrc: '/assets/home/desktop/illustration-passionate.svg',
    title: 'Passionate',
    text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
  },
  {
    imgSrc: '/assets/home/desktop/illustration-resourceful.svg',
    title: 'Resourceful',
    text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
  },
  {
    imgSrc: '/assets/home/desktop/illustration-friendly.svg',
    title: 'Friendly',
    text: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Designo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Section isHero>
        <Hero button={<Button text={'Learn more'} />} />
      </Section>
      <Section>
        <DesignSection>
          {designData.map((item, i) => (
            <DesignCard key={i} {...item} />
          ))}
        </DesignSection>
      </Section>
      <Section>
        <FeaturesSection>
          {featuresData.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </FeaturesSection>
      </Section>
    </div>
  );
}
