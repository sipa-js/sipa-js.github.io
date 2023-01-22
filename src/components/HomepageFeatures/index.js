import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Current javascript framework hype',
    Svg: require('@site/static/img/pages/home/angular_react_vue.svg').default,
    description: (
      <>
          Have you also wondered why more and more big JavaScript frameworks have appeared in the last few years, often sponsored by well-known companies and offering somehow interesting concepts, but not having much in common with the original JavaScript?
          <br/><br/>
          Did you have the impression that completely new worlds were developed there, as if you had to learn a new language?
          <br/><br/>
          Did you have the impression that development used to be much easier and more intuitive?
          <br/><br/>
          Does it annoy you that you write code that has not much to do with the code that is executed in the browser? Would you rather just be able to run and debug your code in the browser?
          <br/><br/>
          So have you considered maybe just building your own framework again?
          <br/><br/>
          If you find yourself somewhere in the questions here, it could be that you might really like Simpartic.
          <br/><br/>
      </>
    ),
  },
  {
      title: 'Why Simpartic?',
      Svg: require('@site/static/img/pages/home/js_html_css.svg').default,
      description: (
          <>
              I just want to develop with Javascript: The code i write IS the code i run in the browser.
              <br/><br/>
              Writing Javascript and HTML the old way! So I can directly run and debug my code in the browser. Instant!
              <br/><br/>
              Intensive transpiling (minifying) will (can!) finally happen when creating a production build. I even can create a single file production build out of the box! (Feature not yet implemented)
              <br/><br/>
              I don't want to learn a new framework world.
              I can JavaScript, I want to do JavaScript. I want it simple, I want it stupid easy. So i can add whatever I want if I need to.
              <br/><br/>
              A framework that gives me a frame, but doesn't force me into it.
              <br/><br/>
              ... and at the end I want to be a happy programmer! 😊
          </>
    ),
  },
  {
    title: 'Main features',
    Svg: require('@site/static/img/pages/home/simpartic_features.svg').default,
    description: (
      <>
          <ul style={{textAlign: "left"}}>
              <li>Solid basic project structure</li>
              <li>Simple but powerful page pattern structure with loader / router</li>
              <li>Live development web server for JavaScript and SCSS</li>
              <li>Life cycle with hook feature</li>
              <li>Internationalization out of the box ![State](https://img.shields.io/badge/-todo-blue)</li>
              <li>Global state storage to keep state on three different persistence levels</li>
              <li>Builder to create compressed and minified .js and .css for production</li>
              <li>Optionally:
                <ul>
                    <li>EJS template engine (optional) ![State](https://img.shields.io/badge/-prepared-blue)</li>
                    <li>Good old jQuery</li>
                </ul>
              </li>
          </ul>
          <br/>
          To get an overview and idea about the framework, have a look at <div className={styles.buttons}>
          <Link
              className="button button--secondary button--lg"
              to="/docs/guides/intro">
              Getting started ⏱️
          </Link>
      </div>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
