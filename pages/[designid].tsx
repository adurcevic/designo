import { GetStaticProps } from 'next';
import Section from '../components/Layout/Section/Section';
import * as Hero from '../components/Hero/Hero';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import * as DesignCard from '../components/SectionDesign/DesignCard';
import * as Cta from '../components/Cta/Cta';
import * as ProjectCard from '../components/SectionProject/ProjectCard/ProjectCard';
import ProjectGrid from '../components/SectionProject/ProjectGrid/ProjectGrid';
import DesignSection from '../components/SectionDesign/DesignSection';
import Button from '../components/Button/Button';
import { webMeta, webHero, webProjects, webDesign } from '../mock/WebDesign';
import { appMeta, appHero, appProjects, appDesign } from '../mock/AppDesign';
import {
  graphicMeta,
  graphicHero,
  graphicProjects,
  graphicDesign,
} from '../mock/GraphicDesign';
import LeafPattern from '../components/BgPatterns/LeafPattern/LeafPattern';

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
    <div>
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
        <Cta.default {...cta}>
          <Button type="Link" slug="/contact" text={'Get in touch'} />
        </Cta.default>
      </Section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  let meta = webMeta;
  let hero = webHero;
  let projects = webProjects;
  let design = webDesign;

  if (params && params.designid === 'app-design') {
    meta = appMeta;
    hero = appHero;
    projects = appProjects;
    design = appDesign;
  }

  if (params && params.designid === 'graphic-design') {
    meta = graphicMeta;
    hero = graphicHero;
    projects = graphicProjects;
    design = graphicDesign;
  }

  const props = {
    meta,
    hero,
    projects,
    design,
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
