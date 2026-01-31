import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Digivixo | Affordable Custom SaaS Development & AI Automation Agency',
        short_name: 'Digivixo',
        description: 'Affordable custom SaaS development for startups USA. AI automation agency offering scalable backend development, Shopify app UI UX, and low-competition marketing solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
