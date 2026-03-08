import { notFound } from "@tanstack/react-router";
import { allCaseStudies } from "@/content-collections";
import type { CaseStudy } from "@/content-collections";

export function findCaseStudyBySlug(slug: string) {
    const caseStudy = allCaseStudies.find((study: CaseStudy) => study._meta.path === slug);
    if (!caseStudy) {
        throw notFound();
    }
    return caseStudy;
}