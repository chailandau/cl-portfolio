import { createFileRoute } from '@tanstack/react-router';
import { ColoredSubhead, Highlight } from '@/components/ColoredSubhead';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="flex flex-col gap-16 tablet:gap-24 laptop:grid laptop:grid-cols-[1fr_1.5fr] laptop:gap-16 laptop:items-start">
        <div className="relative w-full max-w-[390px] mx-auto laptop:mx-0">
          {/* Optional: add an image here, e.g. about-pic.jpg */}
          <div className="aspect-square bg-background-grid rounded-lg" />
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
