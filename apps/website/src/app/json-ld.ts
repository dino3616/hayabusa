import { getBaseUrl } from '@hayabusa/core/util/get-base-url';
import type { WebApplication, WithContext } from 'schema-dts';

export const jsonLd: WithContext<WebApplication> = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': getBaseUrl({ app: 'website' }).toString(),
  applicationCategory: ['LifestyleApplication', 'UtilitiesApplication'],
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  description:
    'Hayabusa is a service that allows users to manipulate any website in natural language through dynamic automatic browser control using LLM.',
  featureList: ['Operate website'],
  image: `${getBaseUrl({ app: 'website' })}/ogp.png`,
  inLanguage: 'en',
  license: 'https://creativecommons.org/licenses/by/4.0',
  maintainer: {
    '@type': 'Person',
    name: 'shio',
    url: 'https://github.com/dino3616',
  },
  name: 'Hayabusa',
  offers: {
    '@type': 'Offer',
    price: '0',
  },
  provider: {
    '@type': 'Person',
    name: 'shio',
    url: 'https://github.com/dino3616',
  },
  // TODO: Take a screenshot of the /operate page and publish it.
  screenshot: '',
  url: getBaseUrl({ app: 'website' }).toString(),
};
