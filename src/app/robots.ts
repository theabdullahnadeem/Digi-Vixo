import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/private/', '/api/'],
        },
        sitemap: 'https://digivixo.site/sitemap.xml',
        host: 'https://digivixo.site',
    };
}
