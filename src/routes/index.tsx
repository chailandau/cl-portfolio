import { createFileRoute } from '@tanstack/react-router';
import { ColoredSubhead, Highlight } from '@/components/ColoredSubhead';
import { Link } from '@/components/Link';

export const Route = createFileRoute('/')({ component: Home });

const WAVE_ICON = '/images/icons/wave.png';

function Home() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="flex flex-col gap-12 tablet:gap-16">
        <img
          src={WAVE_ICON}
          alt=""
          width={64}
          height={64}
          className="size-16"
          aria-hidden
        />
        <h1 className="display-xl text-blue-500">
          Hi, I'm Chai.
        </h1>
        <ColoredSubhead large>
          I'm a <Highlight variant="aqua">design engineer</Highlight> obsessed
          with <Highlight variant="white">accessibility</Highlight> and{' '}
          <Highlight variant="pink">user experience</Highlight>
        </ColoredSubhead>
        <Link
          to="/about"
          className="text-blue-500! text-sm font-bold lowercase"
          icon
          row
        >
          learn more
        </Link>
      </section>
    </main>
  );
}
