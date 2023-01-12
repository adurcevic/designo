import { GetStaticProps } from 'next';
import Section from '../components/Layout/Section/Section';
import * as AboutCard from '../components/SectionAbout/AboutCard/AboutCard';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import AboutWrapper from '../components/SectionAbout/AboutWrapper/AboutWrapper';
import * as Cta from '../components/Cta/Cta';
import TwoCirclesHero from '../components/SectionAbout/AboutBgPatterns/TwoCirclesHero/TwoCirclesHero';
import BigCircle from '../components/SectionAbout/AboutBgPatterns/BigCircle/BigCircle';
import ThreeCircles from '../components/BgPatterns/ThreeCircles/ThreeCircles';
import TwoCircles from '../components/BgPatterns/TwoCircles/TwoCircles';
import LeafPattern from '../components/BgPatterns/LeafPattern/LeafPattern';
import LocationsNavWrapper from '../components/LocationsNav/LocationsNavWrapper/LocationsNavWrapper';
import * as LocationsNavCard from '../components/LocationsNav/LocationsNavCard/LocationsNavCard';
import { getGraphqlClient } from '../lib/graphql';
import { gql } from 'graphql-request';
import { GetAboutQuery } from '../generated/graphql';

const query = gql`
  query getAbout {
    about {
      data {
        attributes {
          Meta {
            title
            description
          }
          Hero {
            title
            mainText
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
          WeAre {
            title
            mainText
            secondaryText
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
          WeBring {
            title
            mainText
            secondaryText
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
  hero: AboutCard.Props;
  weAre: AboutCard.Props;
  weBring: AboutCard.Props;
  locationsNav: LocationsNavCard.Props[];
  cta: Cta.Props;
};

const AboutUs = ({ meta, hero, weAre, weBring, locationsNav, cta }: Props) => {
  return (
    <>
      <GenericPageMeta.default {...meta} />
      <Section hasHero>
        <AboutWrapper>
          <AboutCard.default {...hero} isHero>
            <TwoCirclesHero />
            <BigCircle />
          </AboutCard.default>
        </AboutWrapper>
        <LeafPattern style={{ top: '320px', left: '-165px' }} />
      </Section>
      <Section hasHero>
        <AboutWrapper>
          <AboutCard.default isReverse {...weAre}>
            <ThreeCircles />
          </AboutCard.default>
        </AboutWrapper>
      </Section>
      <Section>
        <LocationsNavWrapper>
          {locationsNav.map((item, i) => (
            <LocationsNavCard.default key={i} {...item} />
          ))}
        </LocationsNavWrapper>
        <LeafPattern style={{ top: '182px', left: '665px' }} />
      </Section>
      <Section hasHero>
        <AboutWrapper>
          <AboutCard.default {...weBring}>
            <ThreeCircles hidden />
            <TwoCircles />
          </AboutCard.default>
        </AboutWrapper>
      </Section>
      <Section hasCta>
        <Cta.default {...cta} />
      </Section>
    </>
  );
};

export default AboutUs;

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();
  const data: GetAboutQuery = await client.request(query);
  const page = data?.about?.data?.attributes;

  const props = {
    meta: page?.Meta,
    hero: page?.Hero,
    weAre: page?.WeAre,
    locationsNav: page?.LocationsNav,
    weBring: page?.WeBring,
    cta: page?.Cta,
  };

  return { props, revalidate: 1 };
};
