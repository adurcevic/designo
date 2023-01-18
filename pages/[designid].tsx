import { GetStaticProps } from 'next';
import Section from '../components/Layout/Section/Section';
import * as Hero from '../components/Hero/Hero';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import * as DesignCard from '../components/SectionDesign/DesignCard';
import * as Cta from '../components/Cta/Cta';
import * as ProjectCard from '../components/SectionProject/ProjectCard/ProjectCard';
import ProjectGrid from '../components/SectionProject/ProjectGrid/ProjectGrid';
import DesignSection from '../components/SectionDesign/DesignSection';
import LeafPattern from '../components/BgPatterns/LeafPattern/LeafPattern';
import { getGraphqlClient } from '../lib/graphql';
import { gql } from 'graphql-request';
import { GetDesignQuery } from '../generated/graphql';

const query = gql`
  query getDesign($id: ID) {
    projectPage(id: $id) {
      data {
        attributes {
          Meta {
            title
            description
          }
          Hero {
            title
            text
            pattern
          }
          Projects {
            image {
              data {
                attributes {
                  url
                  height
                  width
                }
              }
            }
            title
            text
          }
          DesignsNav {
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
  projects: ProjectCard.Props[];
  design: DesignCard.Props[];
  cta: Cta.Props;
};

export default function WebDesign({
  meta,
  hero,
  projects,
  design,
  cta,
}: Props) {
  return (
    <>
      <GenericPageMeta.default {...meta} />
      <Section hasHero>
        <Hero.default {...hero} hasDesign />
        <LeafPattern style={{ top: '126px', left: '-165px' }} />
      </Section>
      <Section>
        <ProjectGrid>
          {projects.map((item, i) => (
            <ProjectCard.default key={i} {...item} />
          ))}
        </ProjectGrid>
      </Section>
      <Section>
        <DesignSection hasOneRow>
          {design.map((item, i) => (
            <DesignCard.default key={i} {...item} />
          ))}
        </DesignSection>
      </Section>
      <Section hasCta>
        <Cta.default {...cta} />
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const client = getGraphqlClient();
  let data: GetDesignQuery | undefined;

  if (params && params.designid === 'web-design') {
    data = await client.request(query, { id: '1' });
  }

  if (params && params.designid === 'app-design') {
    data = await client.request(query, { id: '2' });
  }

  if (params && params.designid === 'graphic-design') {
    data = await client.request(query, { id: '3' });
  }

  const page = data?.projectPage?.data?.attributes;

  const props = {
    meta: page?.Meta,
    hero: page?.Hero,
    projects: page?.Projects,
    design: page?.DesignsNav,
    cta: page?.Cta,
  };
  return {
    props,
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { designid: 'web-design' } },
      { params: { designid: 'app-design' } },
      { params: { designid: 'graphic-design' } },
    ],
    fallback: false,
  };
};
