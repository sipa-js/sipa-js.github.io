import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Javascript framework hype',
        Svg: require('@site/static/img/pages/home/angular_react_vue.svg').default,
        description: (
            <>
                Have you also wondered why more and more big JavaScript frameworks have appeared in the last few years,
                often sponsored by well-known companies and offering somehow interesting concepts, but not having much
                in common with the original JavaScript?
                <br/><br/>
                Did you have the impression that completely new worlds were developed there, as if you had to learn a
                new language?
                <br/><br/>
                Did you have the impression that development used to be much easier and more intuitive before this
                frameworks appeared?
                <br/><br/>
                Does it annoy you that you write code that has not much to do with the code that is executed in the
                browser? Would you rather just be able to run and debug your code in the browser?
                <br/><br/>
                Do you prefer to choose the libraries you need and combine them to your own project?
                <br/><br/>
                Have you considered building your own lightweight framework and add the libraries you need to?
                <br/><br/>
                If you find yourself somewhere in the questions here, you might really like Sipa.
                <br/><br/>
            </>
        ),
    },
    {
        title: 'Why Sipa?',
        Svg: require('@site/static/img/pages/home/js_html_css.svg').default,
        description: (
            <>
                I just want to develop with Javascript: The code I write IS the code I run in the browser.
                <br/><br/>
                Writing Javascript and HTML the old way, but using latest, modern JavaScript! So I can directly run and
                debug my code in the browser without any special tools. Instantly!
                <br/><br/>
                No modules! Really? Really!
                <br/><br/>
                Intensive transpiling is even not necessary, you can deploy 1:1 your code if you want to. But of course
                you can transpile the project for uglifying and minifying/compressing your code using the production
                build feature. I even can create a single file production build out of the box!
                <br/><br/>
                I don't want to learn a new framework world.
                I can JavaScript, I want to do JavaScript. I want it simple, I want it stupid easy. So I can add
                whatever library I want if I need to.
                <br/><br/>
                Even a component system is provided. But it doesn't need transpiling, can be used or introduced
                separately in other projects without even using sipa itself! And it has no own language, it uses EJS, so
                it's just pure JavaScript!
                <br/><br/>
                A framework that gives me a frame, but doesn't force me into it.
                <br/><br/>
                ... and at the end I want to be a happy programmer (again)! 😊
            </>
        ),
    },
    {
        title: 'Main features',
        Svg: require('@site/static/img/pages/home/sipa_features.svg').default,
        description: (
            <>
                <ul style={{textAlign: "left"}}>
                    <li>Solid basic project structure</li>
                    <li>Simple but powerful page pattern structure with loader / router</li>
                    <li>Live development web server for JavaScript and SCSS</li>
                    <li>Life cycle with hook feature</li>
                    <li>Internationalization out of the box</li>
                    <li>Global state storage to keep state on three different persistence levels</li>
                    <li>Builder to (optionally) create compressed and minified .js and .css for production</li>
                    <li>EJS template engine included</li>
                    <li>Easy and powerful SipaComponent in pure JavaScript to encapsulate logic</li>
                    <li>Good old jQuery</li>
                </ul>
                <br/>
                To get an overview and idea about the framework, have a look at <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/guides/overview">
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
                <Svg className={styles.featureSvg} role="img"/>
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
