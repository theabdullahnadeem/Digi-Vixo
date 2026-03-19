import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/private/', '/api/'],
        },
        sitemap: ['https://digivixo.site/sitemap.xml', 'https://digivixo.com/sitemap.xml'],
        host: 'https://digivixo.site', // primary host
    };
}
