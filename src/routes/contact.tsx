import { createFileRoute } from '@tanstack/react-router';
import { Socials } from '@/components/Socials';
import { socialsData } from '@/lib/data/socials';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

const DOODLES = [
  { src: '/images/icons/asterisk.png', alt: '', className: 'contact-doodle contact-doodle-asterisk' },
  { src: '/images/icons/x.png', alt: '', className: 'contact-doodle contact-doodle-x' },
  { src: '/images/icons/heart.png', alt: '', className: 'contact-doodle contact-doodle-heart' },
] as const;

function Contact() {
  return (
    <main className="px-4 pb-8 pt-14">
      <section className="contact-hero flex flex-col gap-12 tablet:gap-16">
        <div className="contact-hero-heading relative flex flex-col gap-12 tablet:gap-16">
          <div
            className="contact-doodles w-full"
            aria-hidden
          >
            {DOODLES.map((d) => (
              <img
                key={d.src}
                src={d.src}
                alt={d.alt}
                width={38}
                height={40}
                className={d.className}
              />
            ))}
          </div>
          <img
            src="/images/icons/envelope.png"
            alt=""
            width={64}
            height={64}
            className="contact-envelope-icon"
          />
          <h1 className="display-lg text-blue-500">Contact</h1>
          <p className="text-subhead font-sans font-normal">
            Get in touch with me or find me on the internet.
          </p>
        </div>
        <div className="dash-border-top w-full">
          <Socials items={socialsData} />
        </div>
      </section>
    </main>
  );
}
