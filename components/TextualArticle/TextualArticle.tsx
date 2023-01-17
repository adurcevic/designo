import React from 'react';
import { NextPage } from 'next';
import styles from './TextualArticle.module.scss';
import { ComponentPagePrivacyArticle } from '../../generated/graphql';

export type Props = ComponentPagePrivacyArticle;

const TextualArticle: NextPage<Props> = ({ title, date, text }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
        <p>{date}</p>
      </header>
      <article
        className={styles.article}
        dangerouslySetInnerHTML={text ? { __html: text } : undefined}
      ></article>
    </>
  );
};

export default TextualArticle;
