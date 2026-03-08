import { createFileRoute } from "@tanstack/react-router";
import { findCaseStudyBySlug } from "@/lib/utils/caseStudies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params: { slug } }) => findCaseStudyBySlug(slug),
  component: CaseStudyComponent,
});

function CaseStudyComponent() {
  const caseStudy = Route.useLoaderData();

  return (
    <article className="post">
      <header>
        <h2>{caseStudy.title}</h2>
      </header>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: caseStudy.content }}
      />
      <footer>
        <p>By {caseStudy.company}</p>
      </footer>
    </article>
  );
}