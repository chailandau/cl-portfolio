import { createFileRoute } from '@tanstack/react-router';
import { Socials } from '@/components/Socials';
import { socialsData } from '@/lib/data/socials';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

function Contact() {
  return (
    <main className="px-4 pb-8 pt-14">
      <section className="flex flex-col gap-12 tablet:gap-16">
        <h1 className="display-lg text-blue-500">Contact</h1>
        <p className="text-subhead font-sans font-normal">
          Get in touch with me or find me on the internet.
        </p>
        <div className="dash-border-top w-full">
          <Socials items={socialsData} />
        </div>
      </section>
    </main>
  );
}
