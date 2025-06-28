import './globals.css';

export const metadata = {
  title: 'Dr. Serena Blake | Clinical Psychologist',
  description: 'Therapy services in Los Angeles by Dr. Serena Blake, PsyD.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
