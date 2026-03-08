import { createFileRoute } from '@tanstack/react-router';
import { ColoredSubhead, Highlight } from '@/components/ColoredSubhead';

export const Route = createFileRoute('/about')({
  component: About,
});

const ABOUT_IMAGE = '/images/about/about-pic.jpeg';
const PETS = [
  { src: '/images/about/warren.png', alt: 'Warren - greyhound with tongue sticking out of side of mouth', className: 'about-pet about-pet-warren' },
  { src: '/images/about/jasper.png', alt: 'Jasper', className: 'about-pet about-pet-jasper' },
  { src: '/images/about/harvey.png', alt: 'Harvey - orange cat with yellow eyes', className: 'about-pet about-pet-harvey' },
  { src: '/images/about/athena.png', alt: 'Athena - brown tabby cat', className: 'about-pet about-pet-athena' },
] as const;

function About() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="flex flex-col gap-16 tablet:gap-24 laptop:grid laptop:grid-cols-[1fr_1.5fr] laptop:gap-16 laptop:items-start">
        <div className="about-image-wrap w-full max-w-[390px] mx-auto mb-16 laptop:mx-0 laptop:mb-0">
          <div className="about-image-box box-shadow">
            <div className="about-image-box-inner">
              <img
                src={ABOUT_IMAGE}
                alt="Chai Landau smiling, surrounded by greenery"
                width={1000}
                height={1191}
              />
            </div>
          </div>
          <div
            className="about-pets"
            aria-hidden
          >
            {PETS.map((pet) => (
              <img
                key={pet.src}
                src={pet.src}
                alt={pet.alt}
                width={120}
                height={120}
                className={pet.className}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 tablet-lg:max-w-[540px] tablet-lg:ml-auto laptop:ml-0 laptop:gap-8 laptop:mt-3">
          <h1 className="display-lg text-blue-500">
            Hello! I'm Chai.
          </h1>
          <ColoredSubhead>
            I'm a <Highlight variant="aqua">tinkerer</Highlight> at heart with a
            passion for creating <Highlight variant="white">functional</Highlight>{' '}
            and <Highlight variant="pink">delightful</Highlight> user
            experiences.
          </ColoredSubhead>
          <div className="flex flex-col gap-7 text-sm font-normal">
            <p>I prioritize accessibility and functionality in everything I do, whether it is sewing, woodworking, or architecting a component library.</p>

            <p>My design background ensures that my code choices are well-informed and part of a bigger picture.</p>

            <p>When I'm not customizing my mechanical keyboard (Nuphy Air75 V3, brown switches), chances are I am messing around on my Linux server, daydreaming about my next sewing project, or enjoying quality time with my partner and pets.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
