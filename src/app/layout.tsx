import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sriram Venkat | Portfolio',
  description: 'Results-driven B.Tech CS graduate experienced in building full-stack applications and deploying AI models.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
