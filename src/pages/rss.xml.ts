import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";
import { getBlogEntryLanguage, getCollectionSlug } from "@lib/slug-utils";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
    .filter(post => {
      if (post.data.draft) return false;
      try {
        return getBlogEntryLanguage(post) === "ko";
      } catch {
        return false;
      }
    });

  const items = [...blog]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${getCollectionSlug(item)}/`,
    })),
  });
}
