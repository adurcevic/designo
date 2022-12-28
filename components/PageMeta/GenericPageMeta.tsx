import Head from 'next/head';
import { NextPage } from 'next';

export type Props = {
  title: string;
  description: string;
};

const GenericPageMeta: NextPage<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
  );
};

export default GenericPageMeta;
