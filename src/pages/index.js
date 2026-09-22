import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageComparison from '@site/src/components/HomepageComparison';

import styles from './index.module.scss';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className={styles.logo} src={'img/sipa/logo_doc.svg'}/>
        <p className="hero__subtitle" style={{color: "#ff0505"}}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Particularly simple old school single page lightweight web framework for clever javascript developers.">
      <HomepageHeader />
      <main>
        <HomepageComparison />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
