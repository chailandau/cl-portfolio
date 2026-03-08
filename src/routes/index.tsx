import { createFileRoute } from '@tanstack/react-router';
import { allCaseStudies } from "@/content-collections";

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <h1>Home</h1>
      <ul>
      {allCaseStudies.map((caseStudy) => (
        <li key={caseStudy._meta.path}>
          <a href={`/case-studies/${caseStudy._meta.path}`}>
            <h3>{caseStudy.title}</h3>
            <p>{caseStudy.summary}</p>
            <p>{caseStudy.company}</p>
          </a>
        </li>
      ))}
    </ul>
    </main>
  );
}
