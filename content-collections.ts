import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const caseStudies = defineCollection({
    name: "caseStudies",
    directory: "content/caseStudies",
    include: "**/*.md",
    schema: z.object({
        title: z.string(),
        company: z.string(),
        summary: z.string(),
        content: z.string(),
    }),
});

export default defineConfig({
    content: [caseStudies],
});