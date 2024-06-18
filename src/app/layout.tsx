'use client';

import { useState } from 'react';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import '@/styles/globals.css';

// const fontSans = FontSans({ subsets: ['javanese'], variable: '--font-sans' });
// export const metadata: Metadata = {
//   title: 'Printcorn backoffice',
//   description: 'Printcornのバックオフィスです。',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <html lang="ja">
      <body>
        <div className="sticky top-0 z-40 flex h-10 items-center gap-2 bg-accent-foreground px-2 text-white dark:bg-accent">
          <Button
            size="icon"
            variant="ghost"
            className="flex h-8 w-8 items-center justify-center rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>Printcorn BackOffice</div>
          {/* <div className="ml-auto pr-2">
                  <ModeToggle />
                </div> */}
        </div>

        <main className="flex min-h-screen flex-col bg-muted/40">
          <div className="grow">
            {/* <SideNav isOpen={isOpen} /> */}
            <div className="py-3">
              {/* {!isHome && <Header />} */}
              <div className="p-4 sm:px-6">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
