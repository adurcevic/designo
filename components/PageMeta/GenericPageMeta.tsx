import Head from 'next/head';
import { NextPage } from 'next';
import { ComponentPageMeta } from '../../generated/graphql';

export type Props = ComponentPageMeta;

const GenericPageMeta: NextPage<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default GenericPageMeta;
