import Button from '../components/Button/Button';
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
// import { getGraphqlClient } from '../lib/graphql';
// import { gql } from 'graphql-request';

// const query = gql`
//   query getHome {
//     home {
//       data {
//         id
//         attributes {
//           header {
//             __typename
//             ... on ComponentPageLink {
//               title
//               slug
//             }
//           }
//           hero {
//             title
//             subtitle
//             heroImg {
//               __typename
//               data {
//                 id
//                 __typename
//                 attributes {
//                   width
//                   height
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

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
        <Hero.default
          {...hero}
          button={<Button type="Link" slug="/about-us" text={'Learn more'} />}
        />
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
        <Cta.default {...cta}>
          <Button type="Link" slug="/contact" text={'Get in touch'} />
        </Cta.default>
      </Section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const client = getGraphqlClient();
  // const data = await client.request(query);

  const props = {
    meta: {
      title: 'Designo',
      description:
        'With over 10 years in the industry, we are experienced in creating fully responsive websites, apps, and engaging brand experiences.',
    },
    // header: {
    //   logo: '/logo-light.png',
    //   navigation: [
    //     { title: 'Our company', slug: 'our-company' },
    //     { title: 'Locations', slug: 'locations' },
    //     { title: 'Contact', slug: 'contact' },
    //   ],
    // },
    hero: {
      imgSrc: '/assets/image-hero-phone.png',
      title: 'Award-winning custom designs and digital branding solutions',
      subtitle:
        'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.',
    },
    design: [
      {
        title: 'Web design',
        text: 'View Projects',
        slug: 'web-design',
        imgMobile: '/assets/home/mobile/image-web-design.jpg',
        imgTablet: '/assets/home/tablet/image-web-design.jpg',
        imgDesktop: '/assets/home/desktop/image-web-design-large.jpg',
      },
      {
        title: 'App design',
        text: 'View Projects',
        slug: 'app-design',
        imgMobile: '/assets/home/mobile/image-app-design.jpg',
        imgTablet: '/assets/home/tablet/image-app-design.jpg',
        imgDesktop: '/assets/home/desktop/image-app-design.jpg',
      },
      {
        title: 'Graphic design',
        text: 'View Projects',
        slug: 'graphic-design',
        imgMobile: '/assets/home/mobile/image-graphic-design.jpg',
        imgTablet: '/assets/home/tablet/image-graphic-design.jpg',
        imgDesktop: '/assets/home/desktop/image-graphic-design.jpg',
      },
    ],
    features: [
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
    ],
    cta: {
      title: 'Let`s talk about your project',
      text: 'Ready to take it to the next level? Contact us today and find out how our expertiese can help your business grow.',
    },
    // footer: {
    //   logo: '/logo-dark.png',
    //   navigation: [
    //     { title: 'Our company', slug: 'our-company' },
    //     { title: 'Locations', slug: 'locations' },
    //     { title: 'Contact', slug: 'contact' },
    //   ],
    // },
  };
  return {
    props,
    revalidate: 1,
  };
};
