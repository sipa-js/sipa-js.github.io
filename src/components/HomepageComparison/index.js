import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.scss';

const ComparisonRows = [
  {
    feature: 'Compilation Time (Dev Mode)',
    sipa: '⚡ 0.0s (Instant)',
    react: '⏳ 1.5s - 5.0s',
    vue: '⏳ 1.0s - 3.0s',
    angular: '⏳ 3.0s - 10.0s+',
  },
  {
    feature: 'Hot Reload / Refresh',
    sipa: '⚡ Native / Instant',
    react: '~200ms - 500ms',
    vue: '~100ms - 400ms',
    angular: '~400ms - 1.5s',
  },
  {
    feature: 'Build Pipeline Needed',
    sipa: '❌ No (Optional for Production)',
    react: '✅ Required',
    vue: '✅ Required',
    angular: '✅ Required',
  },
  {
    feature: 'Debugging Accuracy',
    sipa: '🎯 1:1 Source Code',
    react: '🔍 Source Maps',
    vue: '🔍 Source Maps',
    angular: '🔍 Source Maps',
  },
  {
    feature: 'Native JavaScript Usage',
    sipa: '✅ Pure JavaScript',
    react: '⚠️ JSX',
    vue: '⚠️ Vue SFCs',
    angular: '⚠️ Angular Templates',
  },
  {
    feature: 'Framework-Specific Syntax',
    sipa: '✅ None',
    react: '⚠️ JSX + Hooks',
    vue: '⚠️ Directives',
    angular: '⚠️ Decorators + DI',
  },
  {
    feature: 'Learning Curve for JavaScript Developers',
    sipa: '🚀 Very Low',
    react: '📚 Medium',
    vue: '📚 Medium',
    angular: '📚 High',
  },
  {
    feature: 'Existing JavaScript Knowledge Reusable',
    sipa: '✅ Immediately',
    react: '⚠️ Partially',
    vue: '⚠️ Partially',
    angular: '⚠️ Requires Angular Concepts',
  },
  {
    feature: 'JavaScript Skill Growth',
    sipa: '✅ Learn and deepen real JavaScript',
    react: '⚠️ Learn React patterns',
    vue: '⚠️ Learn Vue patterns',
    angular: '⚠️ Learn Angular ecosystem',
  },
  {
    feature: 'Career Portability of Skills',
    sipa: '✅ Works everywhere JavaScript is used',
    react: '⚠️ React-centric expertise',
    vue: '⚠️ Vue-centric expertise',
    angular: '⚠️ Angular-centric expertise',
  },
  {
    feature: 'Web Standards Alignment',
    sipa: '✅ Very High',
    react: '⚠️ Framework Abstraction',
    vue: '⚠️ Framework Abstraction',
    angular: '⚠️ Framework Abstraction',
  },
  {
    feature: 'Project Structure',
    sipa: '🧭 Lightweight Conventions',
    react: '⚠️ Team Defined',
    vue: '⚠️ Team Defined',
    angular: '📐 Strongly Prescribed',
  },
  {
    feature: 'Custom Theming',
    sipa: '🎨 Native (S)CSS Freedom',
    react: '✅ Flexible',
    vue: '✅ Flexible',
    angular: '⚠️ Framework-Oriented',
  },
  {
    feature: 'External Library Integration',
    sipa: '✅ Straightforward',
    react: '⚠️ Framework Patterns',
    vue: '⚠️ Framework Patterns',
    angular: '⚠️ Angular Ecosystem Preferred',
  },
  {
    feature: 'Vendor Lock-In Risk',
    sipa: '✅ Minimal',
    react: '⚠️ Medium',
    vue: '⚠️ Medium',
    angular: '⚠️ Higher',
  },
  {
    feature: 'Node Modules Footprint',
    sipa: '🌱 Lightweight',
    react: '📦 Heavy',
    vue: '📦 Heavy',
    angular: '📦 Very Heavy',
  },
];

export default function HomepageComparison() {
  return (
    <section className={styles.comparisonContainer}>
      <div className="container">
        <h2>Why SIPA? Native JavaScript. No Framework Lock-In.</h2>
        <p className={styles.subtitle}>
          SIPA embraces modern web standards instead of introducing another proprietary
          ecosystem. Developers work with standard JavaScript, proven libraries and
          lightweight conventions. Skills learned in SIPA remain valuable across the entire
          JavaScript ecosystem.
        </p>

        <div className={styles.infoBox}>
          <h3>Build applications with JavaScript, not with a framework-specific language.</h3>
          <p>
            SIPA focuses on web standards, native browser capabilities and established
            libraries. Developers spend their time learning JavaScript itself instead of
            memorizing framework-specific concepts, APIs and abstractions.
          </p>
        </div>

        <div className={styles.tableResponsive}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Feature / Metric</th>
                <th className={styles.highlightColumn}>🧬 SIPA</th>
                <th>⚛️ React</th>
                <th>💚 Vue</th>
                <th>🅰️ Angular</th>
              </tr>
            </thead>
            <tbody>
              {ComparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td className={styles.featureName}>{row.feature}</td>
                  <td className={styles.highlightColumn}>
                    <span className={styles.metricGood}>{row.sipa}</span>
                  </td>
                  <td>{row.react}</td>
                  <td>{row.vue}</td>
                  <td>{row.angular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.infoBox}>
          <h3>Key Takeaway</h3>
          <p>
            With SIPA, developers invest their time into learning actual JavaScript, browser
            APIs and web standards. Those skills stay valuable regardless of future technology
            trends. Many frameworks require learning framework-specific concepts that provide
            less benefit outside their own ecosystem.
          </p>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guides/overview" style={{background: "#8a5fbf", color: "white"}}>
            Getting started ⏱️
          </Link>
        </div>
      </div>
    </section>
  );
}
