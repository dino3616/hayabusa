import type { NextPage } from 'next';
import { HeroSection } from '#website/module/introduction/hero-section';
import { jsonLd } from './json-ld';

const RootPage: NextPage = () => (
  <>
    {/* biome-ignore lint/security/noDangerouslySetInnerHtml: The JSON-LD is a trusted source. */}
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <HeroSection />
    <div style={{ height: '100svh' }} />
  </>
);

export default RootPage;
