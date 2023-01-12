import Head from 'next/head';
import { NextPage } from 'next';
import { ComponentPageMeta } from '../../generated/graphql';

export type Props = ComponentPageMeta;

const GenericPageMeta: NextPage<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
  );
};

export default GenericPageMeta;
