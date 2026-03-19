import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import appCss from '../styles.css?url';
import { navItems } from '@/lib/data/nav';

const site_title = 'Chai Landau - Design Engineer';
const site_description = "Hi, I'm Chai. I'm a design engineer obsessed with accessibility and user experience.";
const site_image = '/images/open-graph.png';

export const Route = createRootRoute({
  notFoundComponent: () => (
    <div className="page-wrap px-4 py-14 text-center">
      <h1 className="text-2xl font-semibold">Not found</h1>
      <p className="mt-2 text-neutral-600">This page doesn’t exist.</p>
    </div>
  ),
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: site_title,
      },
      {
        property: 'og:image', content: site_image,
      },
      {property: 'og:type', content: 'website'},
      {property: 'og:description', content: site_description},
      {property: 'og:title', content: site_title},
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body>
        <Header menuItems={navItems} />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
