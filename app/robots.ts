// Ensure this route is statically exportable when using `output: export`
export const dynamic = 'force-static';

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://ojodesigns.com/sitemap.xml',
  };
}