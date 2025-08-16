import rss from '@astrojs/rss';

import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'CHANGE THIS TO FEED TITLE',
    description: 'CHANGE THIS TO FEED DESCRIPTION',
    site: context.site,
    customData: `<language>en-us</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
  });
}