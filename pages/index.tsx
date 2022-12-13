import Head from 'next/head';
import Button from '../components/Button/Button';
import Hero from '../components/Hero/Hero';
import Section from '../components/Layout/Section/Section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Section>
        <Hero button={<Button text={'Learn more'} />} />
      </Section>
    </div>
  );
}
