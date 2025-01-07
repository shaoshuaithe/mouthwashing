'use client';

import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow mt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;