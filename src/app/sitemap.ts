import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteBaseUrl = 'https://digivixo.site';
    const comBaseUrl = 'https://digivixo.com';

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

    const generateStaticEntries = (baseUrl: string): MetadataRoute.Sitemap => 
        staticRoutes.map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.8,
        }));

    const staticEntriesSite = generateStaticEntries(siteBaseUrl);
    const staticEntriesCom = generateStaticEntries(comBaseUrl);

    // Generate blog article entries
    const generateBlogEntries = (baseUrl: string): MetadataRoute.Sitemap =>
        blogPosts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.publishedAt),
            changeFrequency: 'monthly',
            priority: 0.7,
        }));
        
    const blogEntriesSite = generateBlogEntries(siteBaseUrl);
    const blogEntriesCom = generateBlogEntries(comBaseUrl);

    return [...staticEntriesSite, ...staticEntriesCom, ...blogEntriesSite, ...blogEntriesCom];
}
