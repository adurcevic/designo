import Head from 'next/head';
import { NextPage } from 'next';
import { ComponentPageMeta } from '../../generated/graphql';

export type Props = ComponentPageMeta;

const GenericPageMeta: NextPage<Props> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && (
        <meta property="og:image" content={image.data?.attributes?.url}></meta>
      )}
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default GenericPageMeta;
