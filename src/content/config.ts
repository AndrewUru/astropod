import { z, defineCollection } from "astro:content";

const episodeSchema = z.object({
  title: z.string(),
  audioUrl: z.string(),
  pubDate: z.coerce.date().optional(),
  cover: z.string().optional(),
  description: z.string(),
  explicit: z.boolean(),
  episode: z.number().optional(),
  season: z.number().optional(),
  episodeType: z.string().optional(),
  duration: z.coerce.string(), //duration in format hh:mm:ss
  size: z.number().optional(), // size in megabytes
});

export type episodeSchema = z.infer<typeof episodeSchema>;

const episodeCollection = defineCollection({ schema: episodeSchema });

export const collections = {
  episode: episodeCollection,
};
