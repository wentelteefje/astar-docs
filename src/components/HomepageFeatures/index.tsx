import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import React from 'react';
import '../../css/homepage-features.scss';

type FeatureItem = {
  title: JSX.Element;
  link: string;
  iconClass: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  
  {
    title: <Translate>Learn About Astar Network</Translate>,
    link: '/docs/learn',
    iconClass: 'docs',
    description: (
      <>
        <Translate>
        Explains our foundations and provides comprehensive insights into the inner workings of Astar network. 
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Build on Astar Parachain</Translate>,
    link: '/docs/build/',
    iconClass: 'wrench',
    description: (
      <>
        <Translate>
          Find all the resources you need to start testing, deploying,
          and interacting with smart contracts on the Astar Parachain.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Build on Astar zkEVM</Translate>,
    link: '/docs/build/zkEVM',
    iconClass: 'evm',
    description: (
      <>
        <Translate>
          Jump right into building on Astar zkEVM the Layer 2 scaling solution for Ethereum, powered by Polygon CDK.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>User Guides</Translate>,
    link: '/docs/use/',
    iconClass: 'docs',
    description: (
      <>
        <Translate>
          Learn how to create different types of wallets, obtain tokens, and
          manage your assets.
        </Translate>
      </>
    ),
  },
];

function Feature({ title, iconClass, description, link }: FeatureItem) {
  return (
    <Link to={link} className="box">
      <div className="row--title">
        <div className={`${iconClass} icon`} />
        <span className="text--title">{title}</span>
      </div>
      <div className="row--description">
        <span className="text--description">{description}</span>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="section--front-page">
      <div className="container--front-page">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}