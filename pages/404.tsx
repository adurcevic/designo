import ErrorPage from '../components/ErrorPage/ErrorPage';
import GenericPageMeta from '../components/PageMeta/GenericPageMeta';

const Custom404 = () => {
  return (
    <>
      <GenericPageMeta id="error" title={'404: Not found'} />
      <ErrorPage title={'404'} description={'This page could not be found'} />
    </>
  );
};

export default Custom404;
