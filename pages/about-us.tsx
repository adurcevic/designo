import { GetStaticProps } from 'next';
import Section from '../components/Layout/Section/Section';
import * as AboutCard from '../components/SectionAbout/AboutCard/AboutCard';
import * as GenericPageMeta from '../components/PageMeta/GenericPageMeta';
import AboutWrapper from '../components/SectionAbout/AboutWrapper/AboutWrapper';
import * as Cta from '../components/Cta/Cta';
import Button from '../components/Button/Button';
import TwoCirclesHero from '../components/SectionAbout/AboutBgPatterns/TwoCirclesHero/TwoCirclesHero';
import BigCircle from '../components/SectionAbout/AboutBgPatterns/BigCircle/BigCircle';
import ThreeCircles from '../components/BgPatterns/ThreeCircles/ThreeCircles';
import TwoCircles from '../components/BgPatterns/TwoCircles/TwoCircles';
import LeafPattern from '../components/BgPatterns/LeafPattern/LeafPattern';

type Props = {
  meta: GenericPageMeta.Props;
  hero: AboutCard.Props;
  weAre: AboutCard.Props;
  weBring: AboutCard.Props;
  cta: Cta.Props;
};

const AboutUs = ({ meta, hero, weAre, weBring, cta }: Props) => {
  return (
    <>
      <GenericPageMeta.default {...meta} />
      <Section hasHero>
        <AboutWrapper>
          <AboutCard.default {...hero}>
            <TwoCirclesHero />
            <BigCircle />
          </AboutCard.default>
        </AboutWrapper>
        <LeafPattern style={{ bottom: '-430px', left: '-155px' }} />
      </Section>
      <Section hasHero>
        <AboutWrapper>
          <AboutCard.default isReverse {...weAre}>
            <ThreeCircles />
          </AboutCard.default>
        </AboutWrapper>
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
        <Cta.default {...cta}>
          <Button text="Get in touch" />
        </Cta.default>
      </Section>
    </>
  );
};

export default AboutUs;

export const getStaticProps: GetStaticProps = async () => {
  const props = {
    meta: {
      title: 'About us',
      description:
        'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
    },
    hero: {
      title: 'About us',
      mainText:
        'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
      imgMobile: '/assets/about/mobile/image-about-hero.jpg',
      imgTablet: '/assets/about/tablet/image-about-hero.jpg',
      imgDesktop: '/assets/about/desktop/image-about-hero.jpg',
      isHero: true,
    },
    weAre: {
      title: 'World-class talent',
      mainText:
        'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
      secondaryText:
        'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
      imgMobile: '/assets/about/mobile/image-world-class-talent.jpg',
      imgTablet: './assets/about/tablet/image-world-class-talent.jpg',
      imgDesktop: './assets/about/desktop/image-world-class-talent.jpg',
    },
    weBring: {
      title: 'The real deal',
      mainText:
        'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
      secondaryText:
        'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
      imgMobile: '/assets/about/mobile/image-real-deal.jpg',
      imgTablet: './assets/about/tablet/image-real-deal.jpg',
      imgDesktop: './assets/about/desktop/image-real-deal.jpg',
    },
    cta: {
      title: 'Let`s talk about your project',
      text: 'Ready to take it to the next level? Contact us today and find out how our expertiese can help your business grow.',
    },
  };

  return { props, revalidate: 1 };
};
