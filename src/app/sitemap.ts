import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://digivixo.site';

    // Define your static routes here
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/case-studies',
        '/pricing',
        '/industries',
        '/contact',
        '/team',
        '/blog',
        '/privacy-policy',
        '/terms-of-service',
    ];

    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.8,
    }));

    // Generate blog article entries
    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticEntries, ...blogEntries];
}
