import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '../data/projectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://youssefhany.vercel.app';

  // Define static routes
  const staticRoutes = ['', '/services', '/projects', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic project pages
  // Even though navigation uses modal popups, defining these URLs is excellent 
  // for SEO preparation and ensures proper indexing if individual routes are implemented.
  const projectRoutes = PROJECTS_DATA.map((project: { id: number }) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
