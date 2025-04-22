import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextGrid Solutions - IT Services & Digital Solutions',
  description:
    'NextGrid Solutions provides professional IT services including web development, app development, SEO, digital marketing, and more.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'NextGrid Solutions - IT Services & Digital Solutions',
    description:
      'Get premium web/app development, SEO, and marketing services with NextGrid Solutions.',
    url: 'https://nextgrid.solutions', 
    siteName: 'NextGrid Solutions',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'NextGrid Solutions Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextGrid Solutions - IT Services & Digital Solutions',
    description:
      'Professional IT services including web/app development, SEO, and digital marketing.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        {/* ✅ ToastContainer goes here to work globally */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}
